import { Link, useParams } from "react-router-dom";
import useProduct from "../../hooks/useProduct";

const outOfStockImage = require("../../img/outOfStock.png");

const ViewCard = () => {
  const { id } = useParams();
  const product = useProduct(id);
  if (!product.image) return;

  const {
    title,
    description,
    brand,
    price,
    image: { url },
    stock,
  } = product;

  return (
    <div className="row d-flex justify-content-center m-3 py-2">
      <div className="col-auto col-lg-10 card mb-3 product-item">
        <div className="row g-0">
          <div className="col-4">
            {stock === 0 ? (
              <img
                style={{ height: "100%", borderRadius: "1rem" }}
                className="img-fluid p-2"
                src={outOfStockImage}
                alt={`${title}out of stock`}
              />
            ) : (
              <img
                className="card-img-top pt-2"
                style={{ height: "80%", borderRadius: 10 }}
                src={url}
                alt={title}
              />
            )}
          </div>
          <div className="col-8">
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <Link
                to={`/`}
                className="card-link btn btn-lg position-absolute top-0 end-0"
              >
                <i className="bi bi-x-circle-fill"></i>
              </Link>
            </div>

            <div className="card-body text-center">
              <h3>{brand}</h3>
              <h5 className="card-title mt-3">{title}</h5>
              <p className="card-text mt-3">{description}</p>
              <ul className="text-start">
                <li className="list-group-item">
                  <strong>price: </strong> {price}
                  <i className="bi bi-currency-dollar"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewCard;
