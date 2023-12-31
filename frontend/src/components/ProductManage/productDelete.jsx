import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productsService from "../../services/productService";
import { toast } from "react-toastify";

const DeleteProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const deleteProduct = async () => {
      await productsService.deleteProduct(id);
      toast.success("product deleted");
      navigate("/");
    };
    deleteProduct();
  }, [id, navigate]);

  return null;
};

export default DeleteProduct;
