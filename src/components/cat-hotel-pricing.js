import React, { useState } from 'react'

import './cat-hotel-pricing.css'

const CatHotelPricing = (props) => {
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <div className="cat-hotel-pricing-pricing23 thq-section-padding">
      <div className="cat-hotel-pricing-max-width thq-section-max-width">
        {isMonthly === true && (
          <div className="cat-hotel-pricing-container1">
            <div className="cat-hotel-pricing-card thq-card thq-flex-column">
              <h2 className="cat-hotel-pricing-text1 thq-heading-2">
                🧁 Tipuri de Căsuțe disponibile:
              </h2>
              <div className="cat-hotel-pricing-container2">
                <ul className="cat-hotel-pricing-ul1 list">
                  <li className="cat-hotel-pricing-li1 list-item">
                    <span className="cat-hotel-pricing-text2">Tip</span>
                  </li>
                  <li className="cat-hotel-pricing-li2 list-item">
                    <span className="cat-hotel-pricing-text3">
                      Economy- Candy Nest🧸
                    </span>
                  </li>
                  <li className="cat-hotel-pricing-li3 list-item">
                    <span className="cat-hotel-pricing-text4">
                      Standard- Bubble Lounge🍓 (extra 15 min de joaca)
                    </span>
                  </li>
                  <li className="cat-hotel-pricing-li4 list-item">
                    <span className="cat-hotel-pricing-text5">
                      VIP- Meow Pawlace👑 (extra 15 min de joaca + hrana umeda)
                    </span>
                  </li>
                </ul>
                <ul className="cat-hotel-pricing-ul2 list">
                  <li className="cat-hotel-pricing-li5 list-item">
                    <span className="cat-hotel-pricing-text6">Preț/Noapte</span>
                  </li>
                  <li className="cat-hotel-pricing-li6 list-item">
                    <span className="cat-hotel-pricing-text7">90 lei</span>
                  </li>
                  <li className="cat-hotel-pricing-li7 list-item">
                    <span className="cat-hotel-pricing-text8">110 lei</span>
                  </li>
                  <li className="cat-hotel-pricing-li8 list-item">
                    <span className="cat-hotel-pricing-text9">130 lei</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CatHotelPricing
