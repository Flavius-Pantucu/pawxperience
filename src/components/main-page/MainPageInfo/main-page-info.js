import React, { useState } from "react";

import "./main-page-info.css";

const tabContent = [
  {
    id: 0,
    img: "https://images.unsplash.com/photo-1626282874430-c11ae32d2898?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1NHx8YWJzdHJhY3R8ZW58MHx8fHwxNzE2MjAxNjAyfDA&ixlib=rb-4.0.3&w=1500",
    title: "Grijă personalizată pentru fiecare companion",
    description:
      "Fiecare animal este unic, de aceea oferim servicii personalizate adaptate nevoilor individuale. Echipa noastră dedicată asigură atenție specială fiecărui oaspete, pentru confort și siguranță maximă.",
  },
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1505356822725-08ad25f3ffe4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ3fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTYyMDEzMDd8MA&ixlib=rb-4.0.3&w=1500",
    title: "Produse naturale și de înaltă calitate",
    description:
      "Folosim doar produse premium, naturale și blânde cu pielea și blana animalelor, pentru o îngrijire eficientă și delicată, care păstrează sănătatea și strălucirea acestora.",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDg0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTYyMDE1NTZ8MA&ixlib=rb-4.0.3&w=1500",
    title: " Mediu curat și prietenos",
    description:
      "Spațiile noastre sunt amenajate cu grijă pentru a oferi un ambient relaxant și igienic, astfel încât animalele să se simtă ca acasă, fie că sunt cazate în hotel sau la grooming.",
  },
];

const MainPageInfo = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="main-page-info-container thq-section-padding">
      <div className="main-page-info-menu">
        {tabContent.map((tab, index) => (
          <div
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="main-page-tabs-info-tab-horizontal"
          >
            <div className="main-page-tabs-info-divider-container">
              {activeTab === index && (
                <div className="main-page-tabs-info-divider-content"></div>
              )}
            </div>
            <div className="main-page-tabs-info-content">
              <h2 className="main-page-tabs-info-title thq-heading-2">
                {tab.title}
              </h2>
              <span className="main-page-tabs-info-description thq-body-small">
                {tab.description}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="main-page-info-image-container">
        <img
          alt=""
          src={tabContent[activeTab].img}
          className="main-page-info-image thq-img-ratio-16-9"
        />
      </div>
    </div>
  );
};

export default MainPageInfo;
