import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import "./navbar.css";

const Navbar = (props) => {
  return (
    <header className={`navbar-container glaas-navbar ${props.rootClassName} `}>
      <header data-thq="thq-navbar" className="navbar-navbar-interactive">
        <Link to="/" className="navbar-navlink">
          <img
            alt="logo"
            src="/logo.png"
            loading="eager"
            className="navbar-image"
          />
        </Link>
        <div data-thq="thq-navbar-nav" className="navbar-desktop-menu">
          <nav className="navbar-links">
            <Link
              to="/cat-hotel"
              className="navbar-link1 thq-link thq-body-small"
            >
              Cat Hotel
            </Link>
            <Link
              to="/grooming-canin"
              className="navbar-link2 thq-link thq-body-small"
            >
              Grooming Caning
            </Link>
          </nav>
        </div>
      </header>
    </header>
  );
};

Navbar.defaultProps = {
  rootClassName: "",
};

Navbar.propTypes = {
  rootClassName: PropTypes.string,
};

export default Navbar;
