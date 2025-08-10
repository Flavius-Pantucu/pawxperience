import React from "react";

import "./grooming-canin-extra-services.css";

const extraServices = [
  {
    title: "✂️Tăiat gheare",
    price: "20 lei",
    description:
      "Pentru lăbuțe fericite și sănătoase!🐾✂️ Tăiem cu grijă ghearele pentru a preveni disconfortul și problemele de mers.",
  },
  {
    title: "💧Vidat glande perianale",
    price: "30 lei",
    description:
      "Confort maxim, fără neplăceri!💧🐕 Ajutăm la golirea glandelor perianale pentru a preveni iritațiile și disconfortul.",
  },
  {
    title: "👂Curățare urechi",
    price: "25 lei",
    description:
      "Urechi curate, blănos fericit!👂🐶 Curățăm delicat urechile pentru a preveni infecțiile și a menține o igienă optimă.",
  },
];

const GroomingCaninExtraServices = () => {
  return (
    <div className="grooming-canin-extra-services-container">
      <div className="grooming-canin-extra-services-max-width thq-section-max-width">
        <div className="grooming-canin-extra-services-header">
          <h2 className="grooming-canin-extra-services-header-title">
            ✨ Servicii extra
          </h2>
          <span className="grooming-canin-extra-services-header-info">
            Pentru că merită mai mult decât un simplu tuns 💖🐶
          </span>
        </div>
        <div className="grooming-canin-extra-services-cards-container thq-flex-row">
          {extraServices.map((service, index) => (
            <div
              className={`grooming-canin-extra-services-card-container grooming-canin-extra-services-card-background${
                index + 1
              } thq-card`}
              key={index}
            >
              <h2 className="grooming-canin-extra-services-card-title thq-heading-2">
                {service.title}
              </h2>
              <span className="grooming-canin-extra-services-card-price thq-body-small">
                {service.price}
              </span>
              <p className="grooming-canin-extra-services-card-description thq-body-large">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="grooming-canin-extra-services-footer">
          <span className="grooming-canin-extra-services-footer-title">
            📸 Și la sfârșit facem o poza în photocornerul PawXperience!
          </span>
          <span className="grooming-canin-extra-services-footer-info thq-body-small">
            📲 Programează acum o sesiune de răsfăț! *(buton cu link WhatsApp
            sau rezervare)*
          </span>
        </div>
      </div>
    </div>
  );
};

export default GroomingCaninExtraServices;
