import { toast } from "react-toastify";
import cartServices from "../services/cartService";
import { useState, useEffect } from "react";
import { useAuth } from "./context/auth.context";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    const cart = async () => {
      try {
        if (user) {
          const response = await cartServices.getCart().then(JSON.stringify());
          const data = response.data.cart;
          setCart(data);
        }
      } catch ({ response }) {
        return cart;
      }
    };

    cart();
  }, []);

  const removeItem = async (id) => {
    const updatedCart = cart.filter((item) => item.product_id._id !== id);
    const item = cart.filter((item) => item.product_id._id === id);
    const itemToRemove = {
      product_id: item[0].product_id._id,
      quantity: 0,
    };
    toast.info("item removed from cart");
    await cartServices.cart(itemToRemove);
    setCart(updatedCart);
  };

  const totalPrice = cart.reduce((total, item) => {
    return total + item.quantity * item.product_id.price;
  }, 0);
  const totalItem = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <>
      {!cart.length ? (
        <h3>the cart is empty</h3>
      ) : (
        <>
          <h3>Shopping Cart</h3>
          {cart.map((item) => {
            return (
              item.product_id._id && (
                <div
                  id={item.product_id._id}
                  className="row d-flex flex-wrap m-1 p_Item"
                  key={item.product_id._id}
                >
                  <div className="col">{item.product_id.title}</div>
                  <div className="col">
                    {item.quantity} (*{item.product_id.price})
                  </div>
                  <div className="col">
                    {item.quantity * item.product_id.price} $
                  </div>
                  <button
                    style={{ border: "none", background: "none" }}
                    onClick={() =>
                      removeItem(item.product_id._id, item.quantity)
                    }
                    className="col card-link link-danger"
                  >
                    <i className="bi bi-dash-circle-fill ms-1"></i>
                  </button>
                </div>
              )
            );
          })}
          <div>
            <p>Total payment: {totalPrice}$</p>
            <p>Total items: {totalItem}</p>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
