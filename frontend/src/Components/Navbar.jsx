import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
export default function Navbar({ getCategory, cartItemsCount, setShowCart }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState();
  useEffect(() => {
    const email = localStorage.getItem("email");
    setEmail(email);
  }, [location]);

  const handleSelectedCategory = (category) => {
    getCategory(category);
  };

  const handleLogout = () => {
    const isLogout = confirm("Are you sure to logout?");
    if(isLogout)
    {
      localStorage.removeItem("email");
      localStorage.removeItem("name");
      navigate("/login");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom fixed-top shadow-sm py-3">
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold text-dark" to="/">
          Shopi
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active text-decoration-underline"
                    : "nav-link text-dark"
                }
                onClick={() => handleSelectedCategory("all")}
              >
                All
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/clothes"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active text-decoration-underline"
                    : "nav-link text-dark"
                }
                onClick={() => handleSelectedCategory("clothes")}
              >
                Clothes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/electronics"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active text-decoration-underline"
                    : "nav-link text-dark"
                }
                onClick={() => handleSelectedCategory("electronics")}
              >
                Electronics
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/furnitures"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active text-decoration-underline"
                    : "nav-link text-dark"
                }
                onClick={() => handleSelectedCategory("furniture")}
              >
                Furnitures
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/toys"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active text-decoration-underline"
                    : "nav-link text-dark"
                }
                onClick={() => handleSelectedCategory("toys")}
              >
                Toys
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav d-none d-md-flex align-items-center gap-3">
            {email ? (
              <>
                <li className="nav-item text-muted">{email}</li>
                <li className="nav-item">
                  <NavLink
                    to="/Myorders"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link active text-decoration-underline"
                        : "nav-link text-dark"
                    }
                  >
                    My Orders
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/myaccount"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link active text-decoration-underline"
                        : "nav-link text-dark"
                    }
                  >
                    My Account
                  </NavLink>
                </li>
                <li
                  className="nav-item d-flex align-items-center gap-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowCart(true)}
                >
                  <FontAwesomeIcon icon={faCartShopping} />
                  <span>({cartItemsCount})</span>
                </li>

                <li
                  className="nav-item d-flex align-items-center gap-2"
                  style={{ cursor: "pointer" }}
                  onClick={handleLogout}
                >
                  <FontAwesomeIcon icon={faSignOut} />
                </li>
              </>
            ) : (
              <li><Link to='/login' className="text-decoration-none text-dark">Login</Link></li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
