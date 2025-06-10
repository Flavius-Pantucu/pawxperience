import React from "react";

import PropTypes from "prop-types";

import "./contact.css";

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
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <div className="contact-contact-info1">
              <div className="contact-content3">
                <h3 className="contact-text2 thq-heading-3">Email</h3>
                <p className="contact-text3 thq-body-large">
                  Urmăriți-ne pe rețelele de socializare pentru actualizări și
                  promoții.
                </p>
              </div>
              <span className="contact-email1 thq-body-small">
                info@pawxperience.com
              </span>
            </div>
          </div>
          <div className="contact-content4">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <div className="contact-contact-info2">
              <div className="contact-content5">
                <h3 className="contact-text4 thq-heading-3">Telefon</h3>
                <p className="contact-text5 thq-body-large">
                  Așteptăm cu nerăbdare să vă răsfățăm animalele de companie!
                </p>
              </div>
              <span className="contact-email2 thq-body-small">
                +40-111-222-333
              </span>
            </div>
          </div>
          <div className="contact-content6">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <div className="contact-contact-info3">
              <div className="contact-content7">
                <h3 className="contact-text6 thq-heading-3">Locație</h3>
                <p className="contact-text7 thq-body-large">
                  Pentru urgențe, vă rugăm să sunați la linia noastră de urgență
                  la numărul +40-111-222-333
                </p>
              </div>
              <span className="contact-email3 thq-body-small">
                Craiova, Romania, etc.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-container">
        <iframe
          src="https://www.google.com/maps?q=Craiova &amp;output=embed"
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
