import React, { useState } from "react";

import "./main-page-tabs-info.css";

const tabContent = [
  {
    id: 0,
    img: "/images/main-page/main-page-tab-info1.jpg",
    title: "Cazare Cat Hotel",
    description: "Cazare luxoasă pentru iubitul tău prieten felin.",
  },
  {
    id: 1,
    img: "/images/main-page/main-page-tab-info2.jpg",
    title: "Servicii de îngrijire",
    description:
      "Servicii profesionale de îngrijire adaptate nevoilor câinelui dumneavoastră.",
  },
  {
    id: 2,
    img: "/images/main-page/main-page-tab-info3.jpg",
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
