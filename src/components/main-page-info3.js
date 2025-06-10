import React from 'react'

import PropTypes from 'prop-types'

import './main-page-info3.css'

const MainPageInfo3 = (props) => {
  return (
    <div
      className={`main-page-info3-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="main-page-info3-max-width thq-section-max-width">
        <div className="main-page-info3-container2 thq-grid-2">
          <div className="main-page-info3-container3">
            <div className="main-page-info3-container4 thq-card">
              <h2 className="main-page-info3-text10 thq-heading-2">
                Bine ați venit la hotelul nostru pentru pisici
              </h2>
              <span className="main-page-info3-text11 thq-body-small">
                Descoperă un sejur luxos și confortabil pentru prietenul tău
                felin la hotelul nostru
              </span>
              <label className="main-page-info3-text12 thq-heading-3">01</label>
            </div>
            <div className="main-page-info3-container5 thq-card">
              <h2 className="main-page-info3-text13 thq-heading-2">
                Servicii de îngrijire pentru câini
              </h2>
              <span className="main-page-info3-text14 thq-body-small">
                Răsfață-ți pisica cu o sesiune de îngrijire relaxantă cu
                groomerii noștri profesioniști.
              </span>
              <label className="main-page-info3-text15 thq-heading-3">02</label>
            </div>
            <div className="main-page-info3-container6 thq-card">
              <h2 className="main-page-info3-text16 thq-heading-2">
                Tipuri de camere disponibile
              </h2>
              <span className="main-page-info3-text17 thq-body-small">
                Alegeți dintr-o varietate de tipuri de camere pentru a se
                potrivi preferințelor și nevoilor pisicii dvs.
              </span>
              <label className="main-page-info3-text18 thq-heading-3">03</label>
            </div>
            <div className="main-page-info3-container7 thq-card">
              <h2 className="main-page-info3-text19 thq-heading-2">
                Rezervați-vă sejurul
              </h2>
              <span className="main-page-info3-text20 thq-body-small">
                Rezervă un loc pentru pisica ta la Hotelul nostru pentru Pisici
                și asigură-te că are un sejur perfect.
              </span>
              <label className="main-page-info3-text21 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

MainPageInfo3.defaultProps = {
  rootClassName: '',
}

MainPageInfo3.propTypes = {
  rootClassName: PropTypes.string,
}

export default MainPageInfo3
