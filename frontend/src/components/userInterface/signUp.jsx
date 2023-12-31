import { getIn, useFormik } from "formik";
import Joi from "joi";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import formikValidateToJoi from "../../utils/formikValidateToJoi";
import Input from "../common/input";
import PageHeader from "../common/pageHeader";
import { useAuth } from "../context/auth.context";

const SignUp = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { createUser, user, login } = useAuth();
  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      userName: "",
      phone: "",
      email: "",
      password: "",
    },
    validate: formikValidateToJoi({
      userName: Joi.string().min(2).max(255).required().label("Name"),
      phone: Joi.string()
        .min(9)
        .max(10)
        .required()
        .regex(/^0[2-9]\d{7,8}$/)
        .label(`Phone`),
      email: Joi.string()
        .min(6)
        .max(128)
        .required()
        .email({ tlds: { allow: false } })
        .label("Email"),
      password: Joi.string()
        .min(8)
        .max(20)
        .required()
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@%$#^&*\-_])(?=(.*\d){4,})[a-zA-Z!@%$#^&*\-_\d]{8,}$/
        )
        .message(
          "The password must contain at least 8 characters (an uppercase letter, a lowercase letter, 4 digits and a special character - !@#$%^&*-_)."
        )
        .label("Password"),
    }),

    async onSubmit(values) {
      try {
        await createUser(values);
        await login({ email: values.email, password: values.password });
        navigate("/");
      } catch ({ response }) {
        if (response && response.status === 400) {
          setError(response.data);
        }
      }
    },
  });

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container">
      <PageHeader
        title="sign-up to powerfull"
        description="All electrical products in one place"
      />
      <form
        className="col-8 mt-3 m-auto p-3 bg-body-secondary shadow-lg"
        onSubmit={form.handleSubmit}
        noValidate
      >
        {error && <div className="alert alert-danger ">{error}</div>}
        <div className="form-group my-1 container">
          <Input
            {...form.getFieldProps("userName")}
            type="text"
            label="userName"
            required
            error={getIn(form.touched.userName) && getIn(form.errors.userName)}
          />
          <Input
            {...form.getFieldProps("phone")}
            type="text"
            label="Phone"
            required
            error={form.touched.phone && form.errors.phone}
          />
          <Input
            {...form.getFieldProps("email")}
            type="email"
            label="Email"
            required
            error={form.touched.email && form.errors.email}
          />
          <Input
            {...form.getFieldProps("password")}
            type="password"
            label="Password"
            required
            error={form.touched.password && form.errors.password}
          />
        </div>
        <div className="d-md-flex justify-content-center mt-3">
          <button
            type="submit"
            disabled={!form.isValid}
            className="btn btn-primary mt-2"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
