import { useEffect, useState } from "react";
import productsService from "../services/productService";

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await productsService.getAll();
        setProducts(data);
      } catch ({ response }) {
        return products;
      }
    };
    getProducts();
  }, []);

  return products;
};

export default useProducts;
