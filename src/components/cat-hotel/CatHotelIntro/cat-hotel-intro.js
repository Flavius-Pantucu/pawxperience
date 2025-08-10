import React from "react";

import "./cat-hotel-intro.css";

const CatHotelIntro = () => {
  return (
    <div className="cat-hotel-intro-layout thq-section-padding">
      <div className="cat-hotel-intro-max-width thq-section-max-width">
        <div className="thq-flex-row cat-hotel-intro-container">
          <div className="cat-hotel-intro-column">
            <div className="cat-hotel-intro-content">
              <div className="cat-hotel-intro-header">
                <h1 className="cat-hotel-intro-header-title thq-heading-1">
                  PawXperience 🐾
                </h1>
                <h1 className="cat-hotel-intro-header-title thq-heading-1">
                  Cat Hotel 🐱
                </h1>
              </div>
              <p className="cat-hotel-intro-header-description thq-body-large">
                O experiență pastelată pentru pisica ta iubită!
              </p>
              <p className="cat-hotel-intro-header-description thq-body-large">
                📍 Locație: etaj dedicat exclusiv pisicuțelor, cu spații de
                joacă interioare și exterioare, camere ventilate și decorate în
                culori delicioase pastel 🐱
              </p>
            </div>
          </div>
          <div className="cat-hotel-intro-image-container">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1586289883499-f11d28aaf52f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTQ2MTY2OHw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1500"
              className="cat-hotel-intro-image thq-img-ratio-4-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatHotelIntro;
