import React from "react";

import PropTypes from "prop-types";

import "./cat-hotel-sales.css";

const CatHotelSales = (props) => {
  return (
    <div
      className={`cat-hotel-sales-testimonial13 thq-section-padding ${props.rootClassName} `}
    >
      <div className="cat-hotel-sales-max-width thq-section-max-width">
        <div className="cat-hotel-sales-container1">
          <h2 className="cat-hotel-sales-text1">
            📅 Reduceri pentru șederi mai lungi:
          </h2>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card">
                <div className="cat-hotel-sales-container3">
                  <div className="cat-hotel-sales-container4">
                    <strong className="cat-hotel-sales-text2 thq-body-large">
                      🐾 5% reducere
                    </strong>
                  </div>
                </div>
                <span className="cat-hotel-sales-text3 thq-body-small">
                  Pentru șederi între 7–20 nopți
                </span>
              </div>
            </div>
          </div>
          <div className="cat-hotel-sales-accent2-bg3 thq-animated-card-bg-2">
            <div className="cat-hotel-sales-accent1-bg3 thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card">
                <div className="cat-hotel-sales-container5">
                  <div className="cat-hotel-sales-container6">
                    <strong className="cat-hotel-sales-text4 thq-body-large">
                      🐾 10% reducere
                    </strong>
                  </div>
                </div>
                <span className="cat-hotel-sales-text5 thq-body-small">
                  Pentru șederi între 21–30 nopți
                </span>
              </div>
            </div>
          </div>
          <div className="cat-hotel-sales-accent2-bg2 thq-animated-card-bg-2">
            <div className="cat-hotel-sales-accent1-bg2 thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card">
                <div className="cat-hotel-sales-container7">
                  <div className="cat-hotel-sales-container8">
                    <strong className="cat-hotel-sales-text6 thq-body-large">
                      🐾 15% reducere
                    </strong>
                  </div>
                </div>
                <span className="cat-hotel-sales-text7 thq-body-small">
                  Pentru șederi de peste 30 nopți
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CatHotelSales.defaultProps = {
  rootClassName: "",
};

CatHotelSales.propTypes = {
  rootClassName: PropTypes.string,
};

export default CatHotelSales;
