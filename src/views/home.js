import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import MainPageIntro from '../components/main-page-intro'
import MainPageInfo1 from '../components/main-page-info1'
import MainPageCatHotelAd from '../components/main-page-cat-hotel-ad'
import MainPageInfo2 from '../components/main-page-info2'
import MainPageGroomingCaninAd from '../components/main-page-grooming-canin-ad'
import MainPageInfo3 from '../components/main-page-info3'
import Contact from '../components/contact'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>PawXperience</title>
        <meta property="og:title" content="PawXperience" />
      </Helmet>
      <Navbar rootClassName="navbarroot-class-name"></Navbar>
      <MainPageIntro rootClassName="main-page-introroot-class-name"></MainPageIntro>
      <MainPageInfo1
        rootClassName="main-page-info1root-class-name"
        feature1ImgSrc="https://images.unsplash.com/photo-1536589961747-e239b2abbec2?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTMwNzgxMnw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
        feature2ImgSrc="https://images.unsplash.com/photo-1505623776320-7edecf5f0771?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTMwNzgyNHw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
        feature3ImgSrc="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTMwNzg2OHw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
      ></MainPageInfo1>
      <MainPageCatHotelAd rootClassName="main-page-cat-hotel-adroot-class-name"></MainPageCatHotelAd>
      <MainPageInfo2
        rootClassName="main-page-info2root-class-name"
        feature1ImgSrc="https://images.unsplash.com/photo-1617112513579-d8755a2c4693?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTMwNzYzMHw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
        feature2ImgSrc="https://images.unsplash.com/photo-1591160690555-5debfba289f0?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTMwNzY0M3w&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
        feature3ImgSrc="https://images.unsplash.com/photo-1613915588863-e6cc05fcaa16?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTMwNzY1M3w&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
      ></MainPageInfo2>
      <MainPageGroomingCaninAd rootClassName="main-page-grooming-canin-adroot-class-name"></MainPageGroomingCaninAd>
      <MainPageInfo3 rootClassName="main-page-info3root-class-name"></MainPageInfo3>
      <Contact rootClassName="contactroot-class-name2"></Contact>
      <Footer rootClassName="footerroot-class-name1"></Footer>
    </div>
  )
}

export default Home
