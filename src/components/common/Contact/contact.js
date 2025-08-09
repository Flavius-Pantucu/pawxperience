import React from "react";

import PropTypes from "prop-types";

import "./contact.css";
import {
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const data = [
  {
    icon: <FaEnvelope size={36} color="#D14836" />,
    title: "Email",
    description:
      "Scrieți-ne un email și vă vom răspunde cât mai curând posibil.",
    value: "contact.pawxperience@gmail.com",
  },
  {
    icon: <FaWhatsapp size={36} color="#25D366" />,
    title: "Telefon",
    description:
      "Pentru întrebări sau rezervări, vă rugăm să ne contactați prin telefon.",
    value: "+40 775 655 787",
  },
  {
    icon: <FaInstagram size={36} color="#E1306C" />,
    title: "Social Media",
    description:
      "Urmăriți-ne pe rețelele de socializare pentru actualizări și promoții!",
    value: "Instagram: @pawxperience4pets",
  },
  {
    icon: <FaMapMarkerAlt size={36} color="#4285F4" />,
    title: "Locație",
    description:
      "Pentru urgențe, vă rugăm să sunați la linia noastră de urgență la numărul +40 775 655 787",
    value: "Str. Lct. Alexandru Paulescu, nr. 13, sector2, București",
  },
];

const Contact = () => {
  return (
    <div className="contact-container thq-section-padding">
      <div className="contact-max-width thq-section-max-width">
        <div className="contact-section-title">
          <div className="contact-title-content">
            <h2 className="contact-title-heading">Contactați-ne</h2>
            <p className="contact-title-text">
              Pentru întrebări sau rezervări, vă rugăm să ne contactați folosind
              informațiile furnizate.
            </p>
          </div>
        </div>
        <div className="contact-row">
          {data.map((item, index) => (
            <div className="contact-row-content" key={index}>
              {item.icon}
              <div className="contact-info">
                <h3 className="contact-info-title">{item.title}</h3>
                <p className="contact-info-description"> {item.description}</p>
              </div>
              <span className="contact-info-value">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="contact-google-maps-container">
        <iframe
          src="https://www.google.com/maps?q=Strada Locotenent Alexandru Paulescu 13 &amp;output=embed"
          address="Craiova "
          className="contact-google-maps"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
