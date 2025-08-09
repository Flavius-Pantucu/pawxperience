import React from "react";

import PropTypes from "prop-types";

import "./grooming-canin-prices.css";

const GroomingCaninPrices = (props) => {
  return (
    <div
      className={`grooming-canin-prices-layout349 thq-section-padding ${props.rootClassName} `}
    >
      <div className="grooming-canin-prices-max-width thq-section-max-width">
        <div className="grooming-canin-prices-container1">
          <h2 className="grooming-canin-prices-text10 thq-heading-2">
            💸 Prețuri
          </h2>
          <span className="grooming-canin-prices-content thq-body-small">
            Transparență și grijă la fiecare pas 🐶 Vezi cât costă răsfățul
            blănosului tău!
          </span>
        </div>
        <div className="grooming-canin-prices-container2 thq-grid-auto-300">
          <div className="grooming-canin-prices-card1 thq-card thq-flex-column">
            <h2 className="grooming-canin-prices-text11 thq-heading-2">
              💖 MarshMallow Pup 💖
            </h2>
            <div className="grooming-canin-prices-container3">
              <ul className="grooming-canin-prices-ul1 list">
                <li className="grooming-canin-prices-li10 list-item">
                  <span className="grooming-canin-prices-text12">
                    Greutatea cățelușului
                  </span>
                  <span className="grooming-canin-prices-text18">Preț</span>
                </li>
                <li className="grooming-canin-prices-li11 list-item">
                  <span className="grooming-canin-prices-text13">
                    🐶 Sub 10 kg
                  </span>
                  <span className="grooming-canin-prices-text19">170 lei</span>
                </li>
                <li className="grooming-canin-prices-li12 list-item">
                  <span className="grooming-canin-prices-text14">
                    🐕 10 – 20 kg
                  </span>
                  <span className="grooming-canin-prices-text20">200 lei</span>
                </li>
                <li className="grooming-canin-prices-li13 list-item">
                  <span className="grooming-canin-prices-text15">
                    🐕 20 – 30 kg
                  </span>
                  <span className="grooming-canin-prices-text21">250 lei</span>
                </li>
                <li className="grooming-canin-prices-li14 list-item">
                  <span className="grooming-canin-prices-text16">
                    🐾 30 – 40 kg
                  </span>
                  <span className="grooming-canin-prices-text22">300 lei</span>
                </li>
                <li className="grooming-canin-prices-li15 list-item">
                  <span className="grooming-canin-prices-text17">
                    🐻 40 – 50 kg
                  </span>
                  <span className="grooming-canin-prices-text23">350 lei</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="grooming-canin-prices-card2 thq-card thq-flex-column">
            <h2 className="grooming-canin-prices-text24 thq-heading-2">
              🫧 Bubble Pup 🫧
            </h2>
            <div className="grooming-canin-prices-container4">
              <ul className="grooming-canin-prices-ul3 list">
                <li className="grooming-canin-prices-li22 list-item">
                  <span className="grooming-canin-prices-text25">
                    Greutatea cățelușului
                  </span>
                  <span className="grooming-canin-prices-text31">Preț</span>
                </li>
                <li className="grooming-canin-prices-li23 list-item">
                  <span className="grooming-canin-prices-text26">
                    🐶 Sub 10 kg
                  </span>
                  <span className="grooming-canin-prices-text32">100 lei</span>
                </li>
                <li className="grooming-canin-prices-li24 list-item">
                  <span className="grooming-canin-prices-text27">
                    🐕 10 – 20 kg
                  </span>
                  <span className="grooming-canin-prices-text33">130 lei</span>
                </li>
                <li className="grooming-canin-prices-li25 list-item">
                  <span className="grooming-canin-prices-text28">
                    🐕 20 – 30 kg
                  </span>
                  <span className="grooming-canin-prices-text34">150 lei</span>
                </li>
                <li className="grooming-canin-prices-li26 list-item">
                  <span className="grooming-canin-prices-text29">
                    🐾 30 – 40 kg
                  </span>
                  <span className="grooming-canin-prices-text35">200 lei</span>
                </li>
                <li className="grooming-canin-prices-li27 list-item">
                  <span className="grooming-canin-prices-text30">
                    🐻 40 – 50 kg
                  </span>
                  <span className="grooming-canin-prices-text36">250 lei</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

GroomingCaninPrices.defaultProps = {
  rootClassName: "",
};

GroomingCaninPrices.propTypes = {
  rootClassName: PropTypes.string,
};

export default GroomingCaninPrices;
