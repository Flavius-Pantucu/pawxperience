import React from "react";

import "./grooming-canin-intro.css";

const firstRowPhotos = [
  "/images/grooming-canin/grooming-canin-intro-photo5.jpg",
  "/images/grooming-canin/grooming-canin-intro-photo2.jpg",
  "/images/grooming-canin/grooming-canin-intro-photo3.jpg",
];

const secondRowPhotos = [
  "/images/grooming-canin/grooming-canin-intro-photo4.jpg",
  "/images/grooming-canin/grooming-canin-intro-photo1.jpg",
  "/images/grooming-canin/grooming-canin-intro-photo7.jpg",
  "/images/grooming-canin/grooming-canin-intro-photo6.jpg",
];

const GroomingCaninIntro = () => {
  return (
    <div className="grooming-canin-intro-main-container">
      <div className="grooming-canin-intro-max-width thq-section-max-width">
        <div className="grooming-canin-intro-column thq-section-padding">
          <div className="grooming-canin-intro-container">
            <h1 className="grooming-canin-intro-heading thq-heading-1">
              PawXperience 🐾
            </h1>
            <h1 className="grooming-canin-intro-heading thq-heading-1">
              Grooming Canin 🐶
            </h1>
          </div>
          <p className="grooming-canin-intro-heading-content thq-body-large">
            La PawXperience, transformăm groomingul într-o experiență plăcută și
            relaxantă pentru patrupedul tău. Oferim băi blânde, tunsori
            personalizate și tratamente de îngrijire într-un spațiu curat și
            sigur.
          </p>
          <p className="grooming-canin-intro-heading-content thq-body-large">
            Cu dragoste și profesionalism, ne asigurăm că fiecare cățel pleacă
            mai fericit, mai curat și mai stilat.
          </p>
        </div>
        <div className="grooming-canin-intro-photos-content">
          <div className="grooming-canin-intro-column1">
            {firstRowPhotos.map((photo, index) => (
              <img
                key={index}
                alt=""
                src={photo}
                className="grooming-canin-intro-image thq-img-ratio-1-1"
              />
            ))}
          </div>
          <div className="grooming-canin-intro-column2">
            {secondRowPhotos.map((photo, index) => (
              <img
                key={index}
                alt=""
                src={photo}
                className="grooming-canin-intro-image thq-img-ratio-1-1"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroomingCaninIntro;
