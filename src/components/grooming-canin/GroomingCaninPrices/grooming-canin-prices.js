import React from "react";

import "./grooming-canin-prices.css";

const cards = [
  {
    title: "💖MarshMallow Pup💖",
    items: [
      {
        weight: "🐶 Sub 10 kg",
        price: "170 lei",
      },
      {
        weight: "🐕 10 – 20 kg",
        price: "200 lei",
      },
      {
        weight: "🐕 20 – 30 kg",
        price: "250 lei",
      },
      {
        weight: "🐾 30 – 40 kg",
        price: "300 lei",
      },
    ],
  },
  {
    title: "🫧Bubble Pup🫧",
    items: [
      {
        weight: "🐶 Sub 10 kg",
        price: "100 lei",
      },
      {
        weight: "🐕 10 – 20 kg",
        price: "130 lei",
      },
      {
        weight: "🐕 20 – 30 kg",
        price: "150 lei",
      },
      {
        weight: "🐾 30 – 40 kg",
        price: "200 lei",
      },
    ],
  },
];

const GroomingCaninPrices = () => {
  return (
    <div className="grooming-canin-prices-layout thq-section-padding">
      <div className="grooming-canin-prices-max-width thq-section-max-width">
        <div className="grooming-canin-prices-header-container">
          <h2 className="grooming-canin-prices-header-title">💸 Prețuri</h2>
          <span className="grooming-canin-prices-content">
            Transparență și grijă la fiecare pas 🐶 Vezi cât costă răsfățul
            blănosului tău!
          </span>
        </div>
        <div className="grooming-canin-prices-content-container">
          {cards.map((card, index) => (
            <div
              className={`grooming-canin-prices-card${index + 1} thq-card`}
              key={index}
            >
              <h2 className="grooming-canin-prices-card-title thq-heading-2">
                {card.title}
              </h2>
              <div className="grooming-canin-prices-container">
                <ul className="grooming-canin-prices-ul list">
                  <li className="grooming-canin-prices-list-item list-item">
                    <span className="grooming-canin-prices-row-header">
                      Greutatea cățelușului
                    </span>
                    <span className="grooming-canin-prices-row-header">
                      Preț
                    </span>
                  </li>
                  {card.items.map((item, itemIndex) => (
                    <li
                      className="grooming-canin-prices-list-item list-item"
                      key={itemIndex}
                    >
                      <span className="grooming-canin-prices-row-text">
                        {item.weight}
                      </span>
                      <span className="grooming-canin-prices-row-text">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroomingCaninPrices;
