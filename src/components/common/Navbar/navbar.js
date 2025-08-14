import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  return (
    <header className="navbar-container glaas-navbar">
      <header className="navbar-navbar-interactive">
        <Link to="/" className="navbar-navlink">
          <img
            alt="logo"
            src="/logo.png"
            loading="eager"
            className="navbar-image"
          />
        </Link>
        <div className="navbar-desktop-menu">
          <nav className="navbar-links">
            <Link to="/cat-hotel" className="navbar-link thq-body-small">
              Cat Hotel
            </Link>
            <Link to="/grooming-canin" className="navbar-link thq-body-small">
              Grooming Canin
            </Link>
          </nav>
        </div>
      </header>
    </header>
  );
};

export default Navbar;
