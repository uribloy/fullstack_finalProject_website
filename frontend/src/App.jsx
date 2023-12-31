import { Route, Routes } from "react-router-dom";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import ProtectedRoute from "./components/common/protectedRoute";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Footer from "./components/pageFooter";
import CreateProduct from "./components/ProductManage/productCreate";
import EditProduct from "./components/ProductManage/productEdit";
import ViewProduct from "./components/ProductManage/productView";
import DeleteProduct from "./components/ProductManage/productDelete";
import SignIn from "./components/userInterface/signIn";
import SignUp from "./components/userInterface/signUp";
import SignOut from "./components/userInterface/signout";
import MyProfile from "./components/userInterface/userProfile";
import Cart from "./components/cart";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100 text-primary">
      <ToastContainer
        position="top-center"
        autoClose={1500}
        transition={Zoom}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <header className="sticky-sm-top titleWeb">
        <Navbar />
      </header>
      <main className="flex-fill container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route
            path="/products"
            element={
              <ProtectedRoute onlyAdmin>
                <CreateProduct />
              </ProtectedRoute>
            }
          />
          <Route
            path="products/edit/:id"
            element={
              <ProtectedRoute onlyAdmin>
                <EditProduct />
              </ProtectedRoute>
            }
          />
          <Route
            path="products/delete/:id"
            element={
              <ProtectedRoute onlyAdmin>
                <DeleteProduct />
              </ProtectedRoute>
            }
          />
          <Route
            path="users/my-profile"
            element={
              <ProtectedRoute>
                <MyProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route path="products/:id" element={<ViewProduct />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="login" element={<SignIn />} />
          <Route path="sign-out" element={<SignOut />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
