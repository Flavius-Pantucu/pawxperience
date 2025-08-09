import React, { useState } from "react";

import "./main-page-tabs-info.css";

const tabContent = [
  {
    id: 0,
    img: "https://images.unsplash.com/photo-1699235641495-24115f03f961?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NzkxODIyNXw&ixlib=rb-4.1.0&q=80&w=1500",
    title: "Cazare Cat Hotel",
    description: "Cazare luxoasă pentru iubitul tău prieten felin.",
  },
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1505356822725-08ad25f3ffe4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ3fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTYyMDEzMDd8MA&ixlib=rb-4.0.3&w=1500",
    title: "Servicii de îngrijire",
    description:
      "Servicii profesionale de îngrijire adaptate nevoilor câinelui dumneavoastră.",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDg0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTYyMDE1NTZ8MA&ixlib=rb-4.0.3&w=1500",
    title: "Îngrijire personalizată",
    description: "Îngrijire personalizată pentru fiecare animal de companie.",
  },
];

const MainPageTabsInfo = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="main-page-tabs-info-container thq-section-padding">
      <div className="main-page-image-container">
        <img
          alt=""
          src={tabContent[activeTab].img}
          className="main-page-image thq-img-ratio-16-9"
        />
      </div>
      <div className="main-page-tabs-info-menu">
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
    </div>
  );
};

export default MainPageTabsInfo;
