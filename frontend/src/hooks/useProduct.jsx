import { useEffect, useState } from "react";
import productsService from "../services/productService";

export const useProduct = (id) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await productsService.getProduct(id);
      setProduct(data);
    };
    getProduct();
  }, [id]);

  return product;
};

export default useProduct;
