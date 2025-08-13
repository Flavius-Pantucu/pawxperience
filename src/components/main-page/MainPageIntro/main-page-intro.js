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
    src="/images/main-page/main-page-intro7.jpg"
    className="main-page-intro-image thq-img-ratio-1-1 thq-img-scale"
  />,
  <img
    alt=""
    src="/images/main-page/main-page-intro8.jpg"
    className="main-page-intro-image thq-img-ratio-1-1 thq-img-scale"
  />,
  <img
    alt=""
    src="/images/main-page/main-page-intro9.jpg"
    className="main-page-intro-image thq-img-ratio-1-1 thq-img-scale"
  />,
  <img
    alt=""
    src="/images/main-page/main-page-intro10.jpg"
    className="main-page-intro-image thq-img-ratio-1-1 thq-img-scale"
  />,
  <img
    alt=""
    src="/images/main-page/main-page-intro11.jpg"
    className="main-page-intro-image thq-img-ratio-1-1 thq-img-scale"
  />,
  <img
    alt=""
    src="/images/main-page/main-page-intro12.jpg"
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
