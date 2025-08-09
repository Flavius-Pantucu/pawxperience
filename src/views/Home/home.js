import React from "react";

import { Helmet } from "react-helmet";

import "./home.css";
import {
  MainPageGroomingCaninAd,
  MainPageCatHotelAd,
  MainPageCardsInfo,
  MainPageTabsInfo,
  MainPageIntro,
  MainPageInfo,
} from "@components/main-page";
import { Navbar, Footer, Contact } from "@components/common";

const Home = () => {
  return (
    <div className="home-container">
      <Helmet>
        <title>PawXperience</title>
      </Helmet>
      <Navbar />
      <MainPageIntro />
      <MainPageTabsInfo />
      <MainPageCatHotelAd />
      <MainPageInfo />
      <MainPageGroomingCaninAd />
      <MainPageCardsInfo />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
