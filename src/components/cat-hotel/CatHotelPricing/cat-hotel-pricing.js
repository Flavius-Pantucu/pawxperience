import React from "react";

import "./cat-hotel-pricing.css";

const roomsTypes = [
  {
    name: "Economy - Candy Nest🧸",
    price: "100 lei",
  },
  {
    name: "Standard - Bubble Lounge🍓 (extra 15 min de joaca)",
    price: "120 lei",
  },
  {
    name: "VIP - Meow Pawlace👑 (extra 15 min de joaca + hrana umeda)",
    price: "140 lei",
  },
];

const CatHotelPricing = () => {
  return (
    <div className="cat-hotel-pricing-layout thq-section-padding">
      <div className="cat-hotel-pricing-max-width thq-section-max-width">
        <div className="cat-hotel-pricing-container">
          <div className="cat-hotel-pricing-card thq-card thq-flex-column">
            <h2 className="cat-hotel-pricing-title thq-heading-2">
              🧁 Tipuri de Căsuțe disponibile:
            </h2>
            <div className="cat-hotel-pricing-rooms-container">
              <ul className="cat-hotel-pricing-ul list">
                <li className="list-item">
                  <span className="cat-hotel-pricing-row-header">Tip</span>
                  <span className="cat-hotel-pricing-row-header">
                    Preț/Noapte
                  </span>
                </li>
                {roomsTypes.map((room, index) => (
                  <li key={index} className="list-item">
                    <span className="cat-hotel-pricing-row-text">
                      {room.name}
                    </span>
                    <span className="cat-hotel-pricing-row-text">
                      {room.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatHotelPricing;
