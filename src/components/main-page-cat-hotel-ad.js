import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './main-page-cat-hotel-ad.css'

const MainPageCatHotelAd = (props) => {
  return (
    <div
      className={`main-page-cat-hotel-ad-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="thq-section-max-width">
        <div className="main-page-cat-hotel-ad-accent2-bg">
          <div className="main-page-cat-hotel-ad-accent1-bg">
            <div className="main-page-cat-hotel-ad-container2">
              <div className="main-page-cat-hotel-ad-content">
                <span className="main-page-cat-hotel-ad-text1 thq-heading-2">
                  Rezervă o cazare pentru pisica ta astăzi!
                </span>
                <p className="main-page-cat-hotel-ad-text2 thq-body-large">
                  Oferă-i pisicii tale o vacanță purr-fectă la hotelul nostru
                  luxos pentru pisici.
                </p>
              </div>
              <div className="main-page-cat-hotel-ad-actions">
                <Link
                  to="/"
                  className="main-page-cat-hotel-ad-navlink thq-button-filled"
                >
                  <span className="main-page-cat-hotel-ad-text3">
                    Rezervă acum
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

MainPageCatHotelAd.defaultProps = {
  rootClassName: '',
}

MainPageCatHotelAd.propTypes = {
  rootClassName: PropTypes.string,
}

export default MainPageCatHotelAd
