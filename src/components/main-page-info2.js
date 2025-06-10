import React, { useState } from "react";

import PropTypes from "prop-types";

import "./main-page-info2.css";

const MainPageInfo2 = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div
      className={`main-page-info2-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="main-page-info2-container2 thq-section-max-width">
        <div className="main-page-info2-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="main-page-info2-tab-horizontal1"
          >
            <div className="main-page-info2-divider-container1">
              {activeTab === 0 && (
                <div className="main-page-info2-container3"></div>
              )}
            </div>
            <div className="main-page-info2-content1">
              <h2 className="main-page-info2-feature1-title1 thq-heading-2">
                Grijă personalizată pentru fiecare companion
              </h2>
              <span className="main-page-info2-feature1-description1 thq-body-small">
                Fiecare animal este unic, de aceea oferim servicii personalizate
                adaptate nevoilor individuale. Echipa noastră dedicată asigură
                atenție specială fiecărui oaspete, pentru confort și siguranță
                maximă.
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="main-page-info2-tab-horizontal2"
          >
            <div className="main-page-info2-divider-container2">
              {activeTab === 1 && (
                <div className="main-page-info2-container4"></div>
              )}
            </div>
            <div className="main-page-info2-content2">
              <h2 className="main-page-info2-feature1-title2 thq-heading-2">
                Produse naturale și de înaltă calitate
              </h2>
              <span className="main-page-info2-feature1-description2 thq-body-small">
                Folosim doar produse premium, naturale și blânde cu pielea și
                blana animalelor, pentru o îngrijire eficientă și delicată, care
                păstrează sănătatea și strălucirea acestora.
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="main-page-info2-tab-horizontal3"
          >
            <div className="main-page-info2-divider-container3">
              {activeTab === 2 && (
                <div className="main-page-info2-container5"></div>
              )}
            </div>
            <div className="main-page-info2-content3">
              <h2 className="main-page-info2-feature1-title3 thq-heading-2">
                Mediu curat și prietenos
              </h2>
              <span className="main-page-info2-feature1-description3 thq-body-small">
                Spațiile noastre sunt amenajate cu grijă pentru a oferi un
                ambient relaxant și igienic, astfel încât animalele să se simtă
                ca acasă, fie că sunt cazate în hotel sau la grooming.
              </span>
            </div>
          </div>
        </div>
        <div className="main-page-info2-image-container">
          {activeTab === 0 && (
            <img
              alt=""
              src="https://images.unsplash.com/photo-1626282874430-c11ae32d2898?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1NHx8YWJzdHJhY3R8ZW58MHx8fHwxNzE2MjAxNjAyfDA&ixlib=rb-4.0.3&w=1500"
              className="main-page-info2-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt=""
              src="https://images.unsplash.com/photo-1505356822725-08ad25f3ffe4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ3fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTYyMDEzMDd8MA&ixlib=rb-4.0.3&w=1500"
              className="main-page-info2-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt=""
              src="https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDg0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTYyMDE1NTZ8MA&ixlib=rb-4.0.3&w=1500"
              className="main-page-info2-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  );
};

MainPageInfo2.defaultProps = {
  rootClassName: "",
};

MainPageInfo2.propTypes = {
  rootClassName: PropTypes.string,
};

export default MainPageInfo2;
