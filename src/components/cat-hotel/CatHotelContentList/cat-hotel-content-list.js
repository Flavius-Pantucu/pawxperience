import React from "react";

import PropTypes from "prop-types";

import "./cat-hotel-content-list.css";

const CatHotelContentList = (props) => {
  return (
    <div
      className={`cat-hotel-content-list-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="cat-hotel-content-list-max-width thq-section-max-width thq-flex-column">
        <div className="cat-hotel-content-list-content thq-flex-column">
          <ul>
            <li className="cat-hotel-content-list-li1 list-item thq-flex-column">
              <h2 className="cat-hotel-content-list-heading11 thq-heading-2">
                🎁 Ce este inclus în preț?
              </h2>
              <ul className="cat-hotel-content-list-ul2 thq-flex-column">
                <li className="list-item cat-hotel-content-list-li2">
                  <h3 className="cat-hotel-content-list-heading31 thq-heading-3">
                    Cazare igienizată zilnic
                  </h3>
                </li>
                <li className="list-item cat-hotel-content-list-li3">
                  <h3 className="cat-hotel-content-list-heading32 thq-heading-3">
                    Hrană de calitate (PetKult, Royal Canin, Lily’s Kitchen)
                  </h3>
                </li>
                <li className="list-item cat-hotel-content-list-li4">
                  <h3 className="cat-hotel-content-list-heading33 thq-heading-3">
                    Apă îmbuteliată proaspătă
                  </h3>
                </li>
                <li className="list-item cat-hotel-content-list-li5">
                  <h3 className="cat-hotel-content-list-heading34 thq-heading-3">
                    Boluri și litieră igienizate zilnic (așternut: silicat,
                    tofu)
                  </h3>
                </li>
                <li className="list-item cat-hotel-content-list-li6">
                  <h3 className="cat-hotel-content-list-heading35 thq-heading-3">
                    Joacă zilnic (30 min) + afecțiune personalizată (15–20 min)
                  </h3>
                </li>
                <li className="list-item cat-hotel-content-list-li7">
                  <h3 className="cat-hotel-content-list-heading36 thq-heading-3">
                    Lumină naturală, aerisire constantă, zgomot redus
                  </h3>
                </li>
                <li className="list-item cat-hotel-content-list-li8">
                  <h3 className="cat-hotel-content-list-heading37 thq-heading-3">
                    Monitorizare veterinară zilnică
                  </h3>
                </li>
                <li className="list-item cat-hotel-content-list-li9">
                  <h3 className="cat-hotel-content-list-heading38 thq-heading-3">
                    Supraveghere video 24/7
                  </h3>
                </li>
              </ul>
              <h2 className="cat-hotel-content-list-heading12 thq-heading-2">
                Actualizări zilnice pentru cat parent: poze și filmulețe
                adorabile cu pisicuța ta, trimise direct pe WhatsApp!
              </h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

CatHotelContentList.defaultProps = {
  rootClassName: "",
};

CatHotelContentList.propTypes = {
  rootClassName: PropTypes.string,
};

export default CatHotelContentList;
