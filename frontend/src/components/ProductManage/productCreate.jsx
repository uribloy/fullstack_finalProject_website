import { useFormik } from "formik";
import Joi from "joi";
import { Link } from "react-router-dom";
import formikValidateToJoi from "../../utils/formikValidateToJoi";
import Input from "../common/input";
import PageHeader from "../common/pageHeader";
import { useAuth } from "../context/auth.context";

const CreateProduct = () => {
  const { error, addNewProduct } = useAuth();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      title: "",
      description: "",
      brand: "",
      category: "",
      price: "",
      image: "",
      stock: "",
    },
    validate: formikValidateToJoi({
      title: Joi.string().min(2).max(255).required().label(`Title`),
      description: Joi.string()
        .min(2)
        .max(1024)
        .required()
        .label(`Description`),
      brand: Joi.string().min(2).max(24).required().label(`Category`),
      category: Joi.string().min(2).max(24).required().label(`Category`),
      price: Joi.number()
        .min(1)
        .max(999_999)
        .required()
        .precision(2)
        .label(`Price`),
      image: Joi.string().min(11).max(1024).allow("").label(`Image`),
      stock: Joi.number().min(1).max(1_000).required().label(`Stock`),
    }),

    async onSubmit(values) {
      addNewProduct(values);
    },
  });

  return (
    <div className="container">
      <PageHeader title="add a new product" />
      <form
        className="col-lg-7 col-md-10 mt-3 m-auto p-3 bg-body-secondary shadow-lg"
        onSubmit={form.handleSubmit}
        noValidate
      >
        {error && <div className="alert alert-danger ">{error}</div>}
        <div className="form-group my-1">
          <Input
            {...form.getFieldProps("title")}
            type="text"
            label="Name"
            required
            error={form.touched.title && form.errors.title}
          />
          <Input
            {...form.getFieldProps("description")}
            type="text"
            label="Description"
            required
            error={form.touched.description && form.errors.description}
          />
          <Input
            {...form.getFieldProps("brand")}
            type="text"
            label="Brand"
            required
            error={form.touched.brand && form.errors.brand}
          />
          <Input
            {...form.getFieldProps("category")}
            type="text"
            label="Category"
            required
            error={form.touched.category && form.errors.category}
          />
          <Input
            {...form.getFieldProps("price")}
            type="number"
            label="Price"
            min={0}
            required
            error={form.touched.price && form.errors.price}
          />
          <Input
            {...form.getFieldProps("image")}
            type="text"
            label="Image"
            error={form.touched.image && form.errors.image}
          />
          <Input
            {...form.getFieldProps("stock")}
            type="number"
            label="stock"
            min={0}
            required
            error={form.touched.stock && form.errors.stock}
          />
        </div>
        <div className="my-2 px-3 d-flex justify-content-between">
          <button
            type="submit"
            disabled={!form.isValid}
            className="btn btn-primary"
          >
            Add new product
          </button>
          <Link to="/my-cards" className="btn btn-danger">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};
export default CreateProduct;
