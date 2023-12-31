import { useFormik } from "formik";
import Joi from "joi";
import Input from "../common/input";
import PageHeader from "../common/pageHeader";
import formikValidateToJoi from "../../utils/formikValidateToJoi";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/auth.context";

const SignIn = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login, user } = useAuth();
  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
    },
    validate: formikValidateToJoi({
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
        await login(values);
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
      <PageHeader title="login to your account" description="it's relly free" />
      <form
        className="col-8 mt-3 m-auto p-3 bg-body-secondary shadow-lg"
        onSubmit={form.handleSubmit}
        noValidate
      >
        {error && <div className="alert alert-danger ">{error}</div>}
        <div className="form-group my-1 container">
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
          <button disabled={!form.isValid} className="btn btn-primary ">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
export default SignIn;
