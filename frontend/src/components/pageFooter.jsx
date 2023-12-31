import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-3 titleWeb">
      <footer className="py-2 mt-2 ">
        <ul className="nav justify-content-center mb-1">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>

        <ul className="nav justify-content-center fs-4">
          <li className="nav-item">
            <Link className="nav-link" to="https://twitter.com/">
              <i className="bi bi-twitter"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="https://web.whatsapp.com/">
              <i className="bi bi-whatsapp"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="https://www.facebook.com/">
              <i className="bi bi-facebook"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="https://www.instagram.com/">
              <i className="bi bi-instagram"></i>
            </Link>
          </li>
        </ul>

        <p className="text-center text-body-secondary">
          &copy; {new Date().getFullYear()}, hackerU A final project
        </p>
      </footer>
    </div>
  );
};

export default Footer;
