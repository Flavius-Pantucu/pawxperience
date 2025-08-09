import React from "react";

import "./main-page-cards-info.css";

const cards = [
  {
    title: "Bine ați venit la hotelul nostru pentru pisici",
    description:
      "Descoperă un sejur luxos și confortabil pentru prietenul tău felin la hotelul nostru",
    number: "01",
  },
  {
    title: "Servicii de îngrijire pentru câini",
    description:
      "Răsfață-ți pisica cu o sesiune de îngrijire relaxantă cu groomerii noștri profesioniști.",
    number: "02",
  },
  {
    title: "Tipuri de camere disponibile",
    description:
      "Alegeți dintr-o varietate de tipuri de camere pentru a se potrivi preferințelor și nevoilor pisicii dvs.",
    number: "03",
  },
  {
    title: "Rezervați-vă sejurul",
    description:
      "Rezervă un loc pentru pisica ta la Hotelul nostru pentru Pisici și asigură-te că are un sejur perfect.",
    number: "04",
  },
];

const MainPageCardsInfo = () => {
  return (
    <div className="main-page-cards-info-main-container thq-section-padding">
      <div className="main-page-cards-info-max-width thq-section-max-width">
        <div className="main-page-cards-info-flex-container thq-grid-2">
          <div className="main-page-cards-info-grid-container">
            {cards.map((cards, index) => (
              <div
                className={`main-page-cards-info-card-container${
                  index + 1
                } thq-card`}
              >
                <h2 className="main-page-cards-info-title thq-heading-2">
                  {cards.title}
                </h2>
                <span className="main-page-cards-info-description thq-body-small">
                  {cards.description}
                </span>
                <label className="main-page-cards-info-card-number thq-heading-3">
                  {cards.number}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPageCardsInfo;
