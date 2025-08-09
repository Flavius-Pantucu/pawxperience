import React from "react";

import { Helmet } from "react-helmet";
import { Navbar, Footer, Contact } from "@components/common";
import "./cat-hotel.css";
import {
  CatHotelContentList,
  CatHotelFAQ,
  CatHotelIntro,
  CatHotelPricing,
  CatHotelRoomsList,
  CatHotelRules,
  CatHotelSales,
} from "@components/cat-hotel";

const CatHotel = (props) => {
  return (
    <div className="cat-hotel-container">
      <Helmet>
        <title>CatHotel - PawXperience</title>
      </Helmet>
      <Navbar />
      <CatHotelIntro />
      <CatHotelRoomsList />
      <CatHotelPricing />
      <CatHotelSales />
      <CatHotelContentList />
      <CatHotelRules />
      <CatHotelFAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default CatHotel;
