import React from "react";

import PropTypes from "prop-types";

import "./contact.css";
import {
  FaEnvelope,
  FaFacebook,
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
    value: (
      <span>
        WhatsApp:{" "}
        <a target="_blank" href="https://wa.me/40775655787">
          +40 775 655 787
        </a>
      </span>
    ),
  },
  {
    icon: (
      <>
        <FaInstagram size={36} color="#E1306C" />
        <FaFacebook size={36} color="#1877F2" />
      </>
    ),
    title: "Social Media",
    description:
      "Urmăriți-ne pe rețelele de socializare pentru actualizări și promoții!",
    value: (
      <>
        <span>
          Instagram:{" "}
          <a target="_blank" href="https://www.instagram.com/pawxperience4pets">
            @pawxperience4pets
          </a>
        </span>
        <span>
          Facebook:{" "}
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=61579054597784&mibextid=wwXIfr&rdid=V8AfxvRcUgFI1D0n&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1B932135nq%2F%3Fmibextid%3DwwXIfr"
          >
            PawXperience Cathotel & Grooming Canin
          </a>
        </span>
      </>
    ),
  },
  {
    icon: <FaMapMarkerAlt size={36} color="#4285F4" />,
    title: "Locație",
    description:
      "Dacă întâmpinați dificultăți în a ajunge la noi, contactați-ne la +40 775 655 787",
    value: "Str. Lct. Alexandru Paulescu, nr. 13, sector2, București",
  },
];

const Contact = () => {
  return (
    <div
      id="contact-component"
      className="contact-container thq-section-padding"
    >
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
              <div className="contact-icon">{item.icon}</div>
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
