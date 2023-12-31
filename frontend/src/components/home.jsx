import { useAuth } from "./context/auth.context";
import { Link } from "react-router-dom";
import ProductList from "./productList";
import { useEffect } from "react";
import productsService from "../services/productService";

const Home = () => {
  const { user, filteredProducts, setFilteredProducts, products, setProducts } =
    useAuth();
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await productsService.getAll();
        setProducts(data);
        setFilteredProducts(data);
      } catch ({ response }) {
        return products;
      }
    };
    getProducts();
  }, []);
  return (
    <div className="row d-flex flex-wrap flex-row justify-content-evenly mt-3">
      {user?.isAdmin && (
        <div className="row-cols-auto d-flex justify-content-center py-2">
          <Link className="btn btn-sm btn-success" to="/products">
            add a new product
          </Link>
        </div>
      )}
      <ProductList filteredProducts={filteredProducts} />
    </div>
  );
};

export default Home;
