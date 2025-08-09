import React, { useState } from "react";

import PropTypes from "prop-types";

import "./main-page-info1.css";

const MainPageInfo1 = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div
      className={`main-page-info1-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="main-page-info1-container2 thq-section-max-width">
        <div className="main-page-info1-image-container">
          {activeTab === 0 && (
            <img
              alt=""
              src="https://images.unsplash.com/photo-1699235641495-24115f03f961?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NzkxODIyNXw&ixlib=rb-4.1.0&q=80&w=1500"
              className="main-page-info1-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt=""
              src="https://images.unsplash.com/photo-1505356822725-08ad25f3ffe4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ3fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTYyMDEzMDd8MA&ixlib=rb-4.0.3&w=1500"
              className="main-page-info1-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt=""
              src="https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDg0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTYyMDE1NTZ8MA&ixlib=rb-4.0.3&w=1500"
              className="main-page-info1-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="main-page-info1-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="main-page-info1-tab-horizontal1"
          >
            <div className="main-page-info1-divider-container1">
              {activeTab === 0 && (
                <div className="main-page-info1-container3"></div>
              )}
            </div>
            <div className="main-page-info1-content1">
              <h2 className="main-page-info1-feature1-title1 thq-heading-2">
                Cazare Cat Hotel
              </h2>
              <span className="main-page-info1-feature1-description thq-body-small">
                Cazare luxoasă pentru iubitul tău prieten felin.
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="main-page-info1-tab-horizontal2"
          >
            <div className="main-page-info1-divider-container2">
              {activeTab === 1 && (
                <div className="main-page-info1-container4"></div>
              )}
            </div>
            <div className="main-page-info1-content2">
              <h2 className="main-page-info1-feature1-title2 thq-heading-2">
                Servicii de îngrijire
              </h2>
              <span className="main-page-info1-feature2-description thq-body-small">
                Servicii profesionale de îngrijire adaptate nevoilor câinelui
                dumneavoastră.
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="main-page-info1-tab-horizontal3"
          >
            <div className="main-page-info1-divider-container3">
              {activeTab === 2 && (
                <div className="main-page-info1-container5"></div>
              )}
            </div>
            <div className="main-page-info1-content3">
              <h2 className="main-page-info1-feature1-title3 thq-heading-2">
                Tipuri de camere
              </h2>
              <span className="main-page-info1-feature3-description thq-body-small">
                O varietate de tipuri de camere disponibile pentru confortul
                pisicii tale.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MainPageInfo1.defaultProps = {
  rootClassName: "",
};

MainPageInfo1.propTypes = {
  rootClassName: PropTypes.string,
};

export default MainPageInfo1;
