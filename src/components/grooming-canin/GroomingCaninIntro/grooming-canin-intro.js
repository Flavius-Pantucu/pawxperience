import React from "react";

import PropTypes from "prop-types";

import "./grooming-canin-intro.css";

const GroomingCaninIntro = (props) => {
  return (
    <div className={`grooming-canin-intro-header76 ${props.rootClassName} `}>
      <div className="grooming-canin-intro-max-width thq-section-max-width">
        <div className="grooming-canin-intro-column1 thq-section-padding">
          <div className="grooming-canin-intro-container">
            <h1 className="grooming-canin-intro-heading11 thq-heading-1">
              PawXperience 🐾
            </h1>
            <h1 className="grooming-canin-intro-heading12 thq-heading-1">
              Grooming Canin 🐶
            </h1>
          </div>
          <p className="grooming-canin-intro-content11 thq-body-large">
            La PawXperience, transformăm groomingul într-o experiență plăcută și
            relaxantă pentru patrupedul tău. Oferim băi blânde, tunsori
            personalizate și tratamente de îngrijire într-un spațiu curat și
            sigur.
          </p>
          <p className="grooming-canin-intro-content12 thq-body-large">
            Cu dragoste și profesionalism, ne asigurăm că fiecare cățel pleacă
            mai fericit, mai curat și mai stilat.
          </p>
        </div>
        <div className="grooming-canin-intro-content">
          <div className="grooming-canin-intro-column2">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0ODYwMjM4NHw&ixlib=rb-4.1.0&q=80&w=1080"
              className="grooming-canin-intro-placeholder-image1 thq-img-ratio-1-1"
            />
            <img
              alt=""
              src="https://images.unsplash.com/photo-1520580413066-ac45756bdc71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0ODYwMjM4NHw&ixlib=rb-4.1.0&q=80&w=1080"
              className="grooming-canin-intro-placeholder-image2 thq-img-ratio-1-1"
            />
            <img
              alt=""
              src="https://images.unsplash.com/photo-1570021974424-60e83dfee639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0ODYwMjM4NHw&ixlib=rb-4.1.0&q=80&w=1080"
              className="grooming-canin-intro-placeholder-image3 thq-img-ratio-1-1"
            />
          </div>
          <div className="grooming-canin-intro-column3">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1510771463146-e89e6e86560e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0ODYwMjM4NXw&ixlib=rb-4.1.0&q=80&w=1080"
              className="grooming-canin-intro-placeholder-image4 thq-img-ratio-1-1"
            />
            <img
              alt=""
              src="https://images.unsplash.com/photo-1504826260979-242151ee45b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0ODYwMjM4NXw&ixlib=rb-4.1.0&q=80&w=1080"
              className="grooming-canin-intro-placeholder-image5 thq-img-ratio-1-1"
            />
            <img
              alt=""
              src="https://images.unsplash.com/photo-1569285105724-89e18c990b7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0ODYwMjM4NXw&ixlib=rb-4.1.0&q=80&w=1080"
              className="grooming-canin-intro-placeholder-image6 thq-img-ratio-1-1"
            />
            <img
              alt=""
              src="https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0ODYwMjM4NXw&ixlib=rb-4.1.0&q=80&w=1080"
              className="grooming-canin-intro-placeholder-image7 thq-img-ratio-1-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

GroomingCaninIntro.defaultProps = {
  rootClassName: "",
};

GroomingCaninIntro.propTypes = {
  rootClassName: PropTypes.string,
};

export default GroomingCaninIntro;
