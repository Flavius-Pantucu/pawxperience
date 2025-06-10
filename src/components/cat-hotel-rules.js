import React from "react";

import PropTypes from "prop-types";

import "./cat-hotel-rules.css";

const CatHotelRules = (props) => {
  return (
    <div
      className={`cat-hotel-rules-container1 thq-section-padding ${props.rootClassName} `}
    >
      <h2 className="cat-hotel-rules-heading1 thq-heading-2">
        ✨ Condiții de cazare
      </h2>
      <span className="cat-hotel-rules-text10">
        Pentru ca toate pisicuțele să se bucure de o ședere liniștită și sigură,
        te rugăm să respecți următoarele:
      </span>
      <div className="cat-hotel-rules-container2">
        <div className="cat-hotel-rules-container3 thq-card">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1577784424946-e12c7b211249?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0ODU5ODcwN3w&ixlib=rb-4.1.0&q=80&w=300"
            className="cat-hotel-rules-image1 thq-img-ratio-1-1"
          />
          <h2 className="cat-hotel-rules-text11 thq-heading-2">🕓 Check-in</h2>
          <span className="cat-hotel-rules-text12 thq-body-small">
            16:00–18:00 (Luni–Duminică)
          </span>
        </div>
        <div className="cat-hotel-rules-container4 thq-card">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1590890547465-65ca69d8901f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0ODU5ODcxNHw&ixlib=rb-4.1.0&q=80&w=300"
            className="cat-hotel-rules-image2 thq-img-ratio-1-1"
          />
          <h2 className="cat-hotel-rules-text13 thq-heading-2">🕐 Check-out</h2>
          <span className="cat-hotel-rules-text14 thq-body-small">
            11:00–13:00 (Luni–Duminică)
          </span>
        </div>
        <div className="cat-hotel-rules-container5 thq-card">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1574231164645-d6f0e8553590?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0ODU5ODY3M3w&ixlib=rb-4.1.0&q=80&w=300"
            className="cat-hotel-rules-image3 thq-img-ratio-1-1"
          />
          <h2 className="cat-hotel-rules-text15 thq-heading-2">🐱 Condiții</h2>
          <span className="cat-hotel-rules-text16 thq-body-small">
            Pisicuța ta va veni în cușca proprie, cu gheruțele tăiate și
            carnetul de sănătate la zi (vaccinuri + deparazitări interne și
            externe).
          </span>
        </div>
        <div className="cat-hotel-rules-container6 thq-card">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1516841273335-e39b37888115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0ODU5ODY2Mnw&ixlib=rb-4.1.0&q=80&w=300"
            className="cat-hotel-rules-image4 thq-img-ratio-1-1"
          />
          <h2 className="cat-hotel-rules-text17 thq-heading-2">💉 Sănătate</h2>
          <span className="cat-hotel-rules-text18 thq-body-small">
            Acceptăm doar pisicuțe sănătoase, fără boli transmisibile și sa nu
            necesite tratament intensiv (oxigen, perfuzoare, monitorizare
            intensiva etc).Afecțiunile cronice pot fi gestionate de medicul
            nostru veterinar.
          </span>
        </div>
        <div className="cat-hotel-rules-container7 thq-card">
          <img
            alt=""
            src="https://images.unsplash.com/flagged/photo-1564228539519-4dfe919785a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0ODU5ODk0OXw&ixlib=rb-4.1.0&q=80&w=300"
            className="cat-hotel-rules-image5 thq-img-ratio-1-1"
          />
          <h2 className="cat-hotel-rules-text19 thq-heading-2">
            🌸 Sterilitate
          </h2>
          <span className="cat-hotel-rules-text20 thq-body-small">
            Pisicuțele (masculi și femele) de peste 1 an și 6 luni trebuie să
            fie castrate/sterilizate, pentru o atmosferă relaxată și prietenoasă
            între toți blănoșii.
          </span>
        </div>
      </div>
    </div>
  );
};

CatHotelRules.defaultProps = {
  rootClassName: "",
};

CatHotelRules.propTypes = {
  rootClassName: PropTypes.string,
};

export default CatHotelRules;
