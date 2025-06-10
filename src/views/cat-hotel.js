import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import CatHotelIntro from '../components/cat-hotel-intro'
import CatHotelRoomsList from '../components/cat-hotel-rooms-list'
import CatHotelPricing from '../components/cat-hotel-pricing'
import CatHotelSales from '../components/cat-hotel-sales'
import CatHotelContentList from '../components/cat-hotel-content-list'
import CatHotelRules from '../components/cat-hotel-rules'
import CatHotelFAQ from '../components/cat-hotel-faq'
import Contact from '../components/contact'
import Footer from '../components/footer'
import './cat-hotel.css'

const CatHotel = (props) => {
  return (
    <div className="cat-hotel-container">
      <Helmet>
        <title>CatHotel - PawXperience</title>
        <meta property="og:title" content="CatHotel - PawXperience" />
      </Helmet>
      <Navbar rootClassName="navbarroot-class-name2"></Navbar>
      <CatHotelIntro rootClassName="cat-hotel-introroot-class-name"></CatHotelIntro>
      <CatHotelRoomsList rootClassName="cat-hotel-rooms-listroot-class-name"></CatHotelRoomsList>
      <CatHotelPricing></CatHotelPricing>
      <CatHotelSales rootClassName="cat-hotel-salesroot-class-name"></CatHotelSales>
      <CatHotelContentList rootClassName="cat-hotel-content-listroot-class-name"></CatHotelContentList>
      <CatHotelRules rootClassName="cat-hotel-rulesroot-class-name"></CatHotelRules>
      <CatHotelFAQ rootClassName="cat-hotel-fa-qroot-class-name"></CatHotelFAQ>
      <Contact rootClassName="contactroot-class-name1"></Contact>
      <Footer></Footer>
    </div>
  )
}

export default CatHotel
