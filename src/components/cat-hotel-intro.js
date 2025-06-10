import React from "react";

import PropTypes from "prop-types";

import "./cat-hotel-intro.css";

const CatHotelIntro = (props) => {
  return (
    <div
      className={`cat-hotel-intro-header1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="cat-hotel-intro-max-width thq-section-max-width">
        <div className="thq-flex-row cat-hotel-intro-container1">
          <div className="cat-hotel-intro-column">
            <div className="cat-hotel-intro-content">
              <div className="cat-hotel-intro-container2">
                <h1 className="cat-hotel-intro-heading11 thq-heading-1">
                  PawXperience 🐾
                </h1>
                <h1 className="cat-hotel-intro-heading12 thq-heading-1">
                  Cat Hotel 🐱
                </h1>
              </div>
              <p className="cat-hotel-intro-content11 thq-body-large">
                O experiență pastelată pentru pisica ta iubită!
              </p>
              <p className="cat-hotel-intro-content12 thq-body-large">
                📍 Locație: etaj dedicat exclusiv pisicuțelor, cu spații de
                joacă interioare și exterioare, camere ventilate și decorate în
                culori delicioase pastel 🐱 
              </p>
            </div>
          </div>
          <div className="cat-hotel-intro-container3">
            <img
              alt="Cat Hotel and Grooming Services"
              src="https://images.unsplash.com/photo-1586289883499-f11d28aaf52f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTQ2MTY2OHw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1500"
              className="cat-hotel-intro-image1 thq-img-ratio-4-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

CatHotelIntro.defaultProps = {
  rootClassName: "",
};

CatHotelIntro.propTypes = {
  rootClassName: PropTypes.string,
};

export default CatHotelIntro;
