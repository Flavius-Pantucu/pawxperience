import React from "react";

import { Helmet } from "react-helmet";

import "./home.css";
import {
  MainPageCatHotelAd,
  MainPageGroomingCaninAd,
  MainPageInfo1,
  MainPageInfo2,
  MainPageInfo3,
  MainPageIntro,
} from "@components/main-page";
import { Navbar, Footer, Contact } from "@components/common";

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>PawXperience</title>
      </Helmet>
      <Navbar />
      <MainPageIntro />
      <MainPageInfo1
        feature1ImgSrc="https://images.unsplash.com/photo-1536589961747-e239b2abbec2?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTMwNzgxMnw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
        feature2ImgSrc="https://images.unsplash.com/photo-1505623776320-7edecf5f0771?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTMwNzgyNHw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
        feature3ImgSrc="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTMwNzg2OHw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
      ></MainPageInfo1>
      <MainPageCatHotelAd />
      <MainPageInfo2
        rootClassName="main-page-info2root-class-name"
        feature1ImgSrc="https://images.unsplash.com/photo-1617112513579-d8755a2c4693?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTMwNzYzMHw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
        feature2ImgSrc="https://images.unsplash.com/photo-1591160690555-5debfba289f0?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTMwNzY0M3w&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
        feature3ImgSrc="https://images.unsplash.com/photo-1613915588863-e6cc05fcaa16?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTMwNzY1M3w&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
      ></MainPageInfo2>
      <MainPageGroomingCaninAd />
      <MainPageInfo3 />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
