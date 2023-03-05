import {
  ArrowDropDown,
  Lock,
  Notifications,
  Logout,
  ExitToApp,
  ShoppingCart,
  ShoppingCartOutlined,
} from "@material-ui/icons";
// import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import "./navbar.scss";

import { Link } from "react-router-dom";
import { Badge } from "@material-ui/core";

// /assets/images/frontpage-logo.png.png

const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);

  const handleLogOut = () => {
    localStorage.clear();
  };
  return (
    <nav class="navbar navbar-expand-lg sticky-top bg-success topbar">
      <div class="container-fluid">
        <Link to="/" class="navbar-brand text-white logo-link">
          <img
            src="/assets/img/logop.png"
            alt=""
            className="logo"
            style={{
              width: "280px",
              height: "300px",
              position: "absolute",
              top: "-119px",
              left: "40px",
            }}
          />
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse mx-4" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mx-5 mb-lg-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Hire Us
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Events
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Parties
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#"></a>
                </li>
              </ul>
            </li>
          </ul>

          <span className="mobilenav">
            {user ? (
              <>
                <Link to="/signup">
                  <button class="btn btn-light text-success regbtn">
                    Register
                  </button>
                </Link>
                <Link to="/login">
                  <button class="btn btn-warning text-white logbtn">
                    Login
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/cart" className="mx-2 text-white">
                  <span>
                    <Badge className="mb-3" badgeContent="1" color="error" />
                    <ShoppingCartOutlined />
                  </span>
                </Link>

                <button class="btn btn-light text-dark mx-2 buybtn">
                  ₦ Buy Water
                </button>

                <Link to="/user/id">
                  <a class="nav-link text-white mx-3" href="#">
                    <img
                      class="rounded-circle "
                      alt="profile"
                      style={{ width: "40px", height: "40px" }}
                      src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                    />
                  </a>
                </Link>
                <a class="nav-link  text-white mx-3" href="#">
                  <ExitToApp onClick={handleLogOut} />
                </a>
              </>
            )}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
