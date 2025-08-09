import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container thq-section-padding">
      <div className="footer-max-width thq-section-max-width">
        <div className="footer-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer-row">
            <span className="footer-text">© 2025 PawXperience</span>
            <div className="footer-footer-links">
              <span className="footer-text">Privacy Policy</span>
              <span className="footer-text">Terms and Conditions</span>
              <span className="footer-text">Cookies Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
