import React from "react";

import "./grooming-canin-pricing.css";

const plans = [
  {
    title: "💖MarshMallow Pup💖",
    subtitle: "Pachetul Complet de Răsfăț",
    info: "✨ Un cățeluș moale, parfumat și fericit ca un marshmallow dulce! ✨",
    items: [
      "✂️ Tuns & styling",
      "🧼 2 șamponări delicate + masaj",
      "🧴 Balsam hrănitor",
      "🐾 Tăiere gheare",
      "💧 Vidat glande",
      "👂 Curățare urechi",
      "🍓 Parfum cu note delicate",
    ],
  },
  {
    title: "🫧Bubble Pup🫧",
    subtitle: "Pachetul de Spălat & Uscat",
    info: "🫧Spumă, bule și un blănos super curat & fericit!🫧",
    items: [
      "🧼 2 samponari delicate + masaj",
      "🧴 Balsam hrănitor",
      "💨 Uscare completă și atentă",
      "🍓 Parfum",
    ],
  },
];

const GroomingCaninPricing = () => {
  return (
    <div className="grooming-canin-pricing-main-container thq-section-padding">
      <div className="grooming-canin-pricing-max-width thq-section-max-width">
        <div className="grooming-canin-pricing-section-title">
          <div className="grooming-canin-pricing-header">
            <h2 className="grooming-canin-pricing-header-title">✨ Planuri</h2>
            <p className="grooming-canin-pricing-header-description">
              Alege planul perfect pentru tine și cățelușul tău
            </p>
          </div>
        </div>
        <div className="grooming-canin-pricing-container">
          {plans.map((plan, index) => (
            <div
              className={`grooming-canin-pricing-column${index + 1} thq-card`}
              key={index}
            >
              <div className="grooming-canin-pricing-card-container">
                <div className="grooming-canin-pricing-card-content">
                  <h3 className="grooming-canin-pricing-card-title thq-heading-3">
                    {plan.title}
                  </h3>
                  <h3 className="grooming-canin-pricing-card-subtitle thq-heading-3">
                    {plan.subtitle}
                  </h3>
                  <p className="grooming-canin-pricing-card-info thq-body-large">
                    {plan.info}
                  </p>
                </div>
                <div className="grooming-canin-pricing-list">
                  {plan.items.map((item, itemIndex) => (
                    <div
                      className="grooming-canin-pricing-list-item"
                      key={itemIndex}
                    >
                      <span className="grooming-canin-pricing-item-text thq-body-small">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroomingCaninPricing;
