import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "./context/auth.context";
import NavbarFilter from "./navbarFilter";

const logo = require("../img/logo2.PNG");
const Navbar = () => {
  const { user, handleCategoryFilter, handleSearchFilter } = useAuth();
  const [mode, setMode] = useState("light");
  const htmlTag = document.getElementsByTagName("html")[0];
  useEffect(() => {
    htmlTag.setAttribute("data-bs-theme", mode);
  }, [mode]);
  return (
    <>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-3 mt-4 flex-wrap align-items-center justify-content-end align-content-center d-flex">
            <Link className="navbar-brand " to="/">
              <img src={logo} alt="powerfull logo" height="75" />
            </Link>
          </div>

          <div className="col-6 form-check form-switch mt-4 d-flex flex-wrap align-items-center justify-content-end gap-5 align-content-center">
            {user && (
              <div>
                <Link to={`/users/my-profile`}>
                  <div className="col text-center pt-2">
                    <div className="row">
                      <i className="bi bi-person-circle fs-5"></i>
                    </div>
                    <div className="row text-center">
                      <span>hello {user.name}</span>
                    </div>
                  </div>
                </Link>
              </div>
            )}
            <div className="ms-2">
              <input
                className="form-check-input"
                onChange={() => {
                  setMode(mode === "light" ? "dark" : "light");
                }}
                type="checkbox"
                id="flexSwitchCheckDefault"
              />{" "}
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {mode === "light" ? (
                  <i className="bi bi-brightness-high-fill"></i>
                ) : (
                  <i className="bi bi-moon-fill"></i>
                )}
              </label>
            </div>
          </div>
        </div>
        <nav
          className="navbar navbar-expand-md shadow-sm"
          aria-label="Fourth navbar example"
        >
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample04"
              aria-controls="navbarsExample04"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample04">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
              </ul>

              <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                {user ? (
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/sign-out">
                      LogOut
                    </NavLink>
                  </li>
                ) : (
                  <>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/sign-up">
                        Sign Up
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/login">
                        Sign In
                      </NavLink>
                    </li>
                  </>
                )}
                {user && (
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/cart">
                      cart
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>{" "}
        <div className="container d-flex flex-wrap justify-content-between align-items-center m-2">
          <NavbarFilter
            onCategoryFilter={handleCategoryFilter}
            onSearchFilter={handleSearchFilter}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
