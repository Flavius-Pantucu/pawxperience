import React from "react";

import PropTypes from "prop-types";

import "./grooming-canin-extra-services.css";

const GroomingCaninExtraServices = (props) => {
  return (
    <div
      className={`grooming-canin-extra-services-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="grooming-canin-extra-services-max-width thq-section-max-width">
        <div className="grooming-canin-extra-services-container2">
          <h2 className="grooming-canin-extra-services-text10 thq-heading-2">
            ✨ Servicii extra
          </h2>
          <span className="grooming-canin-extra-services-content1 thq-body-small">
            Pentru că merită mai mult decât un simplu tuns 💖🐶
          </span>
        </div>
        <div className="grooming-canin-extra-services-container3 thq-flex-row">
          <div className="grooming-canin-extra-services-container4 thq-card thq-box-shadow">
            <h2 className="grooming-canin-extra-services-text11 thq-heading-2">
              ✂ Tăiat gheare
            </h2>
            <span className="grooming-canin-extra-services-text12 thq-body-small">
              20 lei
            </span>
            <p className="grooming-canin-extra-services-text13 thq-body-large">
              <span>
                Pentru lăbuțe fericite și sănătoase! 🐾✂️ Tăiem cu grijă
                ghearele pentru a preveni disconfortul și problemele de mers.
              </span>
              <br></br>
            </p>
          </div>
          <div className="grooming-canin-extra-services-container5 thq-card thq-box-shadow">
            <h2 className="grooming-canin-extra-services-text16 thq-heading-2">
              💧 Vidat glande perianale
            </h2>
            <span className="grooming-canin-extra-services-text17 thq-body-small">
              30 lei
            </span>
            <p className="grooming-canin-extra-services-text18 thq-body-large">
              Confort maxim, fără neplăceri 💧🐕 Ajutăm la golirea glandelor
              perianale pentru a preveni iritațiile și disconfortul.
            </p>
          </div>
          <div className="grooming-canin-extra-services-container6 thq-card thq-box-shadow">
            <h2 className="grooming-canin-extra-services-text19 thq-heading-2">
              👂 Curățare urechi
            </h2>
            <span className="grooming-canin-extra-services-text20 thq-body-small">
              25 lei
            </span>
            <p className="grooming-canin-extra-services-text21 thq-body-large">
              Urechi curate, blănos fericit! 👂🐶 Curățăm delicat urechile
              pentru a preveni infecțiile și a menține o igienă optimă.
            </p>
          </div>
        </div>
        <div className="grooming-canin-extra-services-container7">
          <span className="grooming-canin-extra-services-content2 thq-body-small">
            <span>
              📸 Și la sfârșit facem o poza în photocornerul PawXperience!
            </span>
            <br></br>
          </span>
          <span className="grooming-canin-extra-services-content3 thq-body-small">
            <span>
              📲 Programează acum o sesiune de răsfăț! *(buton cu link WhatsApp
              sau rezervare)*
            </span>
            <br></br>
          </span>
        </div>
      </div>
    </div>
  );
};

GroomingCaninExtraServices.defaultProps = {
  rootClassName: "",
};

GroomingCaninExtraServices.propTypes = {
  rootClassName: PropTypes.string,
};

export default GroomingCaninExtraServices;
