import { createContext, useContext, useState, useEffect } from "react";
import usersServices from "../../services/usersService";
import productsService from "../../services/productService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const authContext = createContext({
  login: () => {},
  logout: () => {},
  createUser: () => {},
  user: null,
  filteredProducts: null,
  setFilteredProducts: () => {},
  products: null,
  setProducts: () => {},
  handleCategoryFilter: () => {},
  handleSearchFilter: () => {},
  addNewProduct: () => {},
  error: null,
  setError: () => {},
});
authContext.displayName = "auth";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(usersServices.getUser());
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const refreshUser = () => setUser(usersServices.getUser());

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

  const login = async (credentials) => {
    const response = await usersServices.login(credentials);
    refreshUser();
    return response;
  };
  const logout = () => {
    usersServices.logout();
    refreshUser();
  };

  const handleCategoryFilter = (category) => {
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  const handleSearchFilter = (query) => {
    const filtered = products.filter(
      (product) =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const addNewProduct = async (values) => {
    try {
      let body = { ...values };
      if (body.image) {
        body.image = { url: body.image, alt: body.title };
      } else {
        body.image = { url: "default image", alt: body.title };
      }

      await productsService.createProduct(body);
      setProducts((prevProducts) => [...prevProducts, body]);
      toast.info("product added successfuly");
      navigate("/");
    } catch ({ response }) {
      if (response && response.status === 400) {
        setError(response.data);
      }
    }
  };

  return (
    <authContext.Provider
      value={{
        login,
        logout,
        createUser: usersServices.createUser,
        user,
        filteredProducts,
        setFilteredProducts,
        products,
        setProducts,
        handleCategoryFilter,
        handleSearchFilter,
        addNewProduct,
        error,
        setError,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(authContext);
};

export default AuthProvider;
