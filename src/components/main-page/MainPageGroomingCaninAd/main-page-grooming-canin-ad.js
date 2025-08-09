import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './main-page-grooming-canin-ad.css'

const MainPageGroomingCaninAd = (props) => {
  return (
    <div
      className={`main-page-grooming-canin-ad-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="thq-section-max-width">
        <div className="main-page-grooming-canin-ad-accent2-bg">
          <div className="main-page-grooming-canin-ad-accent1-bg">
            <div className="main-page-grooming-canin-ad-container2">
              <div className="main-page-grooming-canin-ad-content">
                <span className="main-page-grooming-canin-ad-text1 thq-heading-2">
                  <span>Răsfață-ți patrupedul chiar acum!</span>
                  <br></br>
                </span>
                <p className="main-page-grooming-canin-ad-text4 thq-body-large">
                  <span>
                    Fă o programare în doar câteva secunde și oferă-i animalului
                    tău o experiență de grooming profesională, într-un mediu
                    sigur și prietenos.
                  </span>
                  <br></br>
                  <br></br>
                </p>
              </div>
              <div className="main-page-grooming-canin-ad-actions">
                <Link
                  to="/"
                  className="main-page-grooming-canin-ad-navlink thq-button-filled"
                >
                  <span className="main-page-grooming-canin-ad-text8">
                    Programează-te acum
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

MainPageGroomingCaninAd.defaultProps = {
  rootClassName: '',
}

MainPageGroomingCaninAd.propTypes = {
  rootClassName: PropTypes.string,
}

export default MainPageGroomingCaninAd
