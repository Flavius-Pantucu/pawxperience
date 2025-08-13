import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import "./main-page-grooming-canin-ad.css";

const MainPageGroomingCaninAd = () => {
  return (
    <div className="main-page-grooming-canin-ad-main-container thq-section-padding">
      <div className="thq-section-max-width">
        <div className="main-page-grooming-canin-ad-accent2-bg">
          <div className="main-page-grooming-canin-ad-accent1-bg">
            <div className="main-page-grooming-canin-ad-container">
              <div className="main-page-grooming-canin-ad-content">
                <span className="main-page-grooming-canin-ad-title thq-heading-2">
                  <span>Răsfață-ți patrupedul chiar acum!</span>
                  <br></br>
                </span>
                <p className="main-page-grooming-canin-ad-description thq-body-large">
                  <span>
                    Fă o programare în doar câteva secunde și oferă-i animalului
                    tău o experiență de grooming profesională, într-un mediu
                    sigur și prietenos.
                  </span>
                  <br></br>
                  <br></br>
                </p>
              </div>
              <div className="main-page-grooming-canin-ad-actions">
                <div className="main-page-grooming-canin-ad-navlink thq-button-filled">
                  <span className="main-page-grooming-canin-ad-button-text">
                    <a href="#contact-component">Programează-te acum</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPageGroomingCaninAd;
