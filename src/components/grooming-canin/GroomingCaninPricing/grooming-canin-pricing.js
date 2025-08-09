import React, { useState } from "react";

import PropTypes from "prop-types";

import "./grooming-canin-pricing.css";

const GroomingCaninPricing = (props) => {
  const [isMonthly, setIsMonthly] = useState(true);
  return (
    <div
      className={`grooming-canin-pricing-pricing23 thq-section-padding ${props.rootClassName} `}
    >
      <div className="grooming-canin-pricing-max-width thq-section-max-width">
        <div className="grooming-canin-pricing-section-title">
          <div className="grooming-canin-pricing-content">
            <h2 className="grooming-canin-pricing-text10 thq-heading-2">
              ✨ Planuri
            </h2>
            <p className="grooming-canin-pricing-text11 thq-body-large">
              <span className="grooming-canin-pricing-text12">
                Alege planul perfect pentru tine și cățelușul tău
              </span>
            </p>
          </div>
        </div>
        {isMonthly === true && (
          <div className="grooming-canin-pricing-container">
            <div className="grooming-canin-pricing-column1 thq-card">
              <div className="grooming-canin-pricing-price1">
                <div className="grooming-canin-pricing-price2">
                  <h3 className="grooming-canin-pricing-text14 thq-heading-3">
                    💖 MarshMallow Pup 💖
                  </h3>
                  <h3 className="grooming-canin-pricing-text15 thq-heading-3">
                    Pachetul Complet de Răsfăț
                  </h3>
                  <p className="grooming-canin-pricing-text16 thq-body-large">
                    ✨ Un cățeluș moale, parfumat și fericit ca un marshmallow
                    dulce! ✨
                  </p>
                </div>
                <div className="grooming-canin-pricing-list1">
                  <div className="grooming-canin-pricing-list-item10">
                    <span className="grooming-canin-pricing-text17 thq-body-small">
                      ✂ Tuns & styling
                    </span>
                  </div>
                  <div className="grooming-canin-pricing-list-item11">
                    <span className="grooming-canin-pricing-text18 thq-body-small">
                      🧼 2 șamponări delicate + masaj
                    </span>
                  </div>
                  <div className="grooming-canin-pricing-list-item12">
                    <span className="grooming-canin-pricing-text19 thq-body-small">
                      🧴 Balsam hrănitor
                    </span>
                  </div>
                  <div className="grooming-canin-pricing-list-item13">
                    <span className="grooming-canin-pricing-text20 thq-body-small">
                      🐾 Tăiere gheare
                    </span>
                  </div>
                  <div className="grooming-canin-pricing-list-item14">
                    <span className="grooming-canin-pricing-text21 thq-body-small">
                      💧 Vidat glande
                    </span>
                  </div>
                  <div className="grooming-canin-pricing-list-item15">
                    <span className="grooming-canin-pricing-text22 thq-body-small">
                      👂 Curățare urechi
                    </span>
                  </div>
                  <div className="grooming-canin-pricing-list-item16">
                    <span className="grooming-canin-pricing-text23 thq-body-small">
                      🍓 Parfum cu note delicate
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grooming-canin-pricing-column2 thq-card">
              <div className="grooming-canin-pricing-price3">
                <div className="grooming-canin-pricing-price4">
                  <h3 className="grooming-canin-pricing-text24 thq-heading-3">
                    🫧 Bubble Pup 🫧
                  </h3>
                  <h3 className="grooming-canin-pricing-text25 thq-heading-3">
                    Pachetul de Spălat & Uscat
                  </h3>
                  <p className="grooming-canin-pricing-text26 thq-body-large">
                    🫧Spumă, bule și un blănos super curat & fericit!🫧
                  </p>
                </div>
                <div className="grooming-canin-pricing-list2">
                  <div className="grooming-canin-pricing-list-item17">
                    <span className="grooming-canin-pricing-text27 thq-body-small">
                      🧼 2 samponari delicate + masaj
                    </span>
                  </div>
                  <div className="grooming-canin-pricing-list-item18">
                    <span className="grooming-canin-pricing-text28 thq-body-small">
                      🧴 Balsam hrănitor
                    </span>
                  </div>
                  <div className="grooming-canin-pricing-list-item19">
                    <span className="grooming-canin-pricing-text29 thq-body-small">
                      💨 Uscare completă și atentă
                    </span>
                  </div>
                  <div className="grooming-canin-pricing-list-item20">
                    <span className="grooming-canin-pricing-text30 thq-body-small">
                      🍓 Parfum
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

GroomingCaninPricing.defaultProps = {
  rootClassName: "",
};

GroomingCaninPricing.propTypes = {
  rootClassName: PropTypes.string,
};

export default GroomingCaninPricing;
