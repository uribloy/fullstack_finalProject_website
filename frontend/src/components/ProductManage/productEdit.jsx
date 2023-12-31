import { useFormik } from "formik";
import Joi from "joi";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useProduct from "../../hooks/useProduct";
import productsService from "../../services/productService";
import formikValidateToJoi from "../../utils/formikValidateToJoi";
import Input from "../common/input";
import PageHeader from "../common/pageHeader";
import { toast } from "react-toastify";

const EditProduct = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();
  const product = useProduct(id);
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
      try {
        let body = { ...values };
        if (body.image) {
          body.image = { url: body.image, alt: body.title };
        } else {
          body.image = { url: "default image", alt: body.title };
        }
        await productsService.updateProduct(id, body);
        toast.success("product update successfuly");
        navigate("/");
      } catch ({ response }) {
        if (response && response.status === 400) {
          setError(response.data);
        }
      }
    },
  });
  useEffect(() => {
    if (Object.keys(product).length === 0) return;
    const defaultValues = {
      title: product?.title,
      description: product?.description,
      brand: product?.brand,
      category: product?.category,
      price: product?.price,
      image: product?.image.url,
      stock: product?.stock,
    };
    form.setValues(defaultValues);
  }, [product]);

  return (
    <div className="container">
      <PageHeader title="Edit product" />
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
            label="Title"
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
            type="nunber"
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
            Save
          </button>
          <Link to="/" className="btn btn-danger">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};
export default EditProduct;
