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
            src="/images/cat-hotel/cat-hotel-checkin.jpg"
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
            src="/images/cat-hotel/cat-hotel-checkout.jpg"
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
            src="/images/cat-hotel/cat-hotel-conditions.jpg"
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
            src="/images/cat-hotel/cat-hotel-health.jpg"
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
            src="/images/cat-hotel/cat-hotel-sterilization.jpg"
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
