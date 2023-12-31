import { Link } from "react-router-dom";
import { useAuth } from "../context/auth.context";
import { useState } from "react";
import cartServices from "../../services/cartService";
import { toast } from "react-toastify";

const Product = ({
  product: {
    _id,
    title,
    description,
    brand,
    price,
    image: { url },
    stock,
  },
}) => {
  const [expanded, setExpanded] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const { user } = useAuth();
  const outOfStockImage = require("../../img/outOfStock.png");

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(isNaN(value) ? 1 : value);
  };

  const addToCart = async () => {
    const item = { product_id: _id, quantity: quantity };
    toast.info("item added to cart");
    await cartServices.cart(item);
  };

  return (
    <>
      <div
        className={`card col-lg-3 col-md-4 col-sm-6 m-2 py-2 product-item ${
          expanded ? "expanded" : ""
        }`}
      >
        {stock === 0 ? (
          <img
            className="card-img-top"
            style={{ height: 200, borderRadius: 10 }}
            src={outOfStockImage}
            alt={`${title}out of stock`}
          />
        ) : (
          <img
            className="card-img-top"
            style={{ height: 200, borderRadius: 10 }}
            src={url}
            alt={title}
          />
        )}

        <div className="card-body text-center my-auto">
          <h5 className="card-title">{title}</h5>
          <p className="card-text description">
            {expanded ? description : `${description.substring(0, 50)}`}
            <button
              style={{ border: "none", background: "none" }}
              className="readMore"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "  Collapse" : " ...more"}
            </button>
          </p>
        </div>
        <ul>
          <li className="list-group-item">{brand}</li>
          <li className="list-group-item">
            <span className="fw-bolder">price: </span> {price}{" "}
            <i className="bi bi-currency-dollar"></i>
          </li>
          {stock !== 0 && stock < 10 && (
            <li className="list-group-item">`Last {stock} left`</li>
          )}
        </ul>

        <div className="row m-0">
          <div className="col 7">
            <input
              className=" col-5 input-group-sm"
              type="number"
              onChange={handleQuantityChange}
              value={quantity}
              min={0}
              max={stock}
            />
          </div>
          <button
            onClick={addToCart}
            disabled={quantity === 0 || stock === 0}
            className="btn btn-success btn-sm col-4"
          >
            Add
          </button>
        </div>
        <div
          className="card-body row-cols-auto d-flex justify-content-center p-2 mt-2"
          style={{ maxHeight: "45px" }}
        >
          {user?.isAdmin && (
            <>
              <Link
                to={`/products/edit/${_id}`}
                className="card-link btn btn-sm btn-secondary"
              >
                <i className="bi bi-pencil-square ms-1"></i>
              </Link>
              <Link
                to={`/products/delete/${_id}`}
                className="card-link btn btn-sm btn-danger"
              >
                <i className="bi bi-trash3-fill ms-1"></i>
              </Link>
            </>
          )}
          <Link
            to={`/products/${_id}`}
            className="card-link btn btn-sm btn-info"
          >
            <i className="bi bi-eye-fill ms-1"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Product;
