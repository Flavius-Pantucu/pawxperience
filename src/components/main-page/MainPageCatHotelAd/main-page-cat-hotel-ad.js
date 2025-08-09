import React from "react";
import { Link } from "react-router-dom";

import "./main-page-cat-hotel-ad.css";

const MainPageCatHotelAd = () => {
  return (
    <div className="main-page-cat-hotel-ad-main-container thq-section-padding">
      <div className="thq-section-max-width">
        <div className="main-page-cat-hotel-ad-accent2-bg">
          <div className="main-page-cat-hotel-ad-accent1-bg">
            <div className="main-page-cat-hotel-ad-container">
              <div className="main-page-cat-hotel-ad-content">
                <span className="main-page-cat-hotel-ad-title thq-heading-2">
                  Rezervă o cazare pentru pisica ta astăzi!
                </span>
                <p className="main-page-cat-hotel-ad-description thq-body-large">
                  Oferă-i pisicii tale o vacanță purr-fectă la hotelul nostru
                  luxos pentru pisici.
                </p>
              </div>
              <div className="main-page-cat-hotel-ad-actions">
                <Link
                  to="/"
                  className="main-page-cat-hotel-ad-navlink thq-button-filled"
                >
                  <span className="main-page-cat-hotel-ad-button-text">
                    Rezervă acum
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPageCatHotelAd;
