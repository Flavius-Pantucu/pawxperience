import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import GroomingCaninIntro from '../components/grooming-canin-intro'
import GroomingCaninPricing from '../components/grooming-canin-pricing'
import GroomingCaninPrices from '../components/grooming-canin-prices'
import GroomingCaninExtraServices from '../components/grooming-canin-extra-services'
import Contact from '../components/contact'
import Footer from '../components/footer'
import './grooming-canin.css'

const GroomingCanin = (props) => {
  return (
    <div className="grooming-canin-container">
      <Helmet>
        <title>GroomingCanin - PawXperience</title>
        <meta property="og:title" content="GroomingCanin - PawXperience" />
      </Helmet>
      <Link to="/" className="grooming-canin-navlink">
        <Navbar
          rootClassName="navbarroot-class-name1"
          className="grooming-canin-component1"
        ></Navbar>
      </Link>
      <GroomingCaninIntro rootClassName="grooming-canin-introroot-class-name"></GroomingCaninIntro>
      <GroomingCaninPricing rootClassName="grooming-canin-pricingroot-class-name"></GroomingCaninPricing>
      <GroomingCaninPrices rootClassName="grooming-canin-pricesroot-class-name"></GroomingCaninPrices>
      <GroomingCaninExtraServices rootClassName="grooming-canin-extra-servicesroot-class-name"></GroomingCaninExtraServices>
      <Contact rootClassName="contactroot-class-name"></Contact>
      <Footer rootClassName="footerroot-class-name"></Footer>
    </div>
  )
}

export default GroomingCanin
