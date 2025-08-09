import React from "react";

import PropTypes from "prop-types";

import "./contact.css";
import {
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = (props) => {
  return (
    <div
      className={`contact-contact20 thq-section-padding ${props.rootClassName} `}
    >
      <div className="contact-max-width thq-section-max-width">
        <div className="contact-section-title">
          <div className="contact-content1">
            <h2 className="contact-heading1 thq-heading-2">Contactați-ne</h2>
            <p className="contact-text1 thq-body-large">
              Pentru întrebări sau rezervări, vă rugăm să ne contactați folosind
              informațiile furnizate.
            </p>
          </div>
        </div>
        <div className="contact-row">
          <div className="contact-content2">
            <FaEnvelope size={36} color="#D14836" />
            <div className="contact-contact-info1">
              <div className="contact-content3">
                <h3 className="contact-text2 thq-heading-3">Email</h3>
                <p className="contact-text3 thq-body-large">
                  Scrieți-ne un email și vă vom răspunde cât mai curând posibil.
                </p>
              </div>
              <span className="contact-email1 thq-body-small">
                contact.pawxperience@gmail.com
              </span>
            </div>
          </div>
          <div className="contact-content4">
            <FaWhatsapp size={36} color="#25D366" />
            <div className="contact-contact-info2">
              <div className="contact-content5">
                <h3 className="contact-text4 thq-heading-3">Telefon</h3>
                <p className="contact-text5 thq-body-large">
                  Pentru întrebări sau rezervări, vă rugăm să ne contactați prin
                  telefon.
                </p>
              </div>
              <span className="contact-email2 thq-body-small">
                +40 775 655 787
              </span>
            </div>
          </div>
          <div className="contact-content4">
            <FaInstagram size={36} color="#E1306C" />
            <div className="contact-contact-info2">
              <div className="contact-content5">
                <h3 className="contact-text4 thq-heading-3">Social Media</h3>
                <p className="contact-text5 thq-body-large">
                  Urmăriți-ne pe rețelele de socializare pentru actualizări și
                  promoții!
                </p>
              </div>
              <span className="contact-email2 thq-body-small">
                Instagram: @pawxperience4pets
              </span>
            </div>
          </div>
          <div className="contact-content6">
            <FaMapMarkerAlt size={36} color="#4285F4" />
            <div className="contact-contact-info3">
              <div className="contact-content7">
                <h3 className="contact-text6 thq-heading-3">Locație</h3>
                <p className="contact-text7 thq-body-large">
                  Pentru urgențe, vă rugăm să sunați la linia noastră de urgență
                  la numărul +40 775 655 787
                </p>
              </div>
              <span className="contact-email3 thq-body-small">
                Str. Lct. Alexandru Paulescu, nr. 13, sector2, București
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-container">
        <iframe
          src="https://www.google.com/maps?q=Strada Locotenent Alexandru Paulescu 13 &amp;output=embed"
          address="Craiova "
          className="contact-google-maps"
        ></iframe>
      </div>
    </div>
  );
};

Contact.defaultProps = {
  rootClassName: "",
};

Contact.propTypes = {
  rootClassName: PropTypes.string,
};

export default Contact;
