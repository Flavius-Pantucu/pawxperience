import React from "react";

import Script from "dangerous-html/react";

import "./main-page-intro.css";

const firstRowImages = [
  <img
    alt=""
    src="/images/main-page/main-page-intro1.jpg"
    className="main-page-intro-image thq-img-ratio-1-1 thq-img-scale"
  />,
  <img
    alt=""
    src="/images/main-page/main-page-intro2.jpg"
    className="main-page-intro-image thq-img-ratio-1-1 thq-img-scale"
  />,
  <img
    alt=""
    src="/images/main-page/main-page-intro3.jpg"
    className="main-page-intro-image thq-img-ratio-1-1 thq-img-scale"
  />,
  <img
    alt=""
    src="/images/main-page/main-page-intro4.jpg"
    className="main-page-intro-image thq-img-ratio-1-1 thq-img-scale"
  />,
  <img
    alt=""
    src="/images/main-page/main-page-intro5.jpg"
    className="main-page-intro-image thq-img-ratio-1-1 thq-img-scale"
  />,
  <img
    alt=""
    src="/images/main-page/main-page-intro6.jpg"
    className="main-page-intro-image thq-img-ratio-1-1 thq-img-scale"
  />,
];

const secondRowImages = [
  <img
    alt=""
    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NzkwODQ0Nnw&ixlib=rb-4.1.0&q=80&w=1080"
    className="main-page-intro-image thq-img-ratio-1-1 thq-img-scale"
  />,
  <img
    alt=""
    src="https://images.unsplash.com/photo-1533292362155-d79af6b08b77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NzkwODQ0N3w&ixlib=rb-4.1.0&q=80&w=1080"
    className="main-page-intro-image thq-img-ratio-1-1 thq-img-scale"
  />,
  <img
    alt=""
    src="https://images.unsplash.com/photo-1510020553968-30f966e1ec9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NzkwODQ0N3w&ixlib=rb-4.1.0&q=80&w=1080"
    className="main-page-intro-image thq-img-ratio-1-1 thq-img-scale"
  />,
  <img
    alt=""
    src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NzkwODQ0OHw&ixlib=rb-4.1.0&q=80&w=1080"
    className="main-page-intro-image thq-img-ratio-1-1 thq-img-scale"
  />,
  <img
    alt=""
    src="https://images.unsplash.com/photo-1534568970742-20b523b5f79f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NzkwODQ0Nnw&ixlib=rb-4.1.0&q=80&w=1080"
    className="main-page-intro-image thq-img-ratio-1-1 thq-img-scale"
  />,
  <img
    alt=""
    src="https://images.unsplash.com/photo-1712617146928-51ab5aabc341?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NzkwODQ0N3w&ixlib=rb-4.1.0&q=80&w=1080"
    className="main-page-intro-image thq-img-ratio-1-1 thq-img-scale"
  />,
];

const MainPageIntro = () => {
  return (
    <div className="main-page-intro-container">
      <div className="main-page-intro-column thq-section-padding thq-section-max-width">
        <div className="main-page-intro-header">
          <h1 className="main-page-intro-title">
            Bine ați venit în Paradisul Animalelor
          </h1>
          <p className="main-page-intro-description">
            Experimentați îngrijirea de lux a animalelor de companie cum nu ați
            mai făcut-o până acum la Hotelul nostru pentru Pisici și serviciile
            de Îngrijire Canină. Prietenii dumneavoastră blănoși merită ce e mai
            bun!
          </p>
        </div>
      </div>
      <div className="main-page-intro-content">
        <div className="main-page-intro-row-container thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal">
            {firstRowImages.map((image) => image)}
          </div>
          <div className="thq-animated-group-horizontal">
            {firstRowImages.map((image) => image)}
          </div>
        </div>
        <div className="main-page-intro-row-container thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            {secondRowImages.map((image) => image)}
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            {secondRowImages.map((image) => image)}
          </div>
        </div>
      </div>
      <div>
        <div className="main-page-intro-container2">
          <Script
            html={`<style>
              @keyframes scroll-x {
                from {
                  transform: translateX(0);
                }
                to {
                  transform: translateX(calc(-100% - 16px));
                }
              }

              @keyframes scroll-y {
                from {
                  transform: translateY(0);
                }
                to {
                  transform: translateY(calc(-100% - 16px));
                }
              }
            </style>
            `}
          ></Script>
        </div>
      </div>
    </div>
  );
};

export default MainPageIntro;
