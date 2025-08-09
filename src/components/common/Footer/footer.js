import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer
      className={`footer-footer7 thq-section-padding ${props.rootClassName} `}
    >
      <div className="footer-max-width thq-section-max-width">
        <div className="footer-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer-row">
            <div className="footer-container">
              <span className="footer-text1 thq-body-small">
                © 2025 PawXperience
              </span>
            </div>
            <div className="footer-footer-links">
              <span className="footer-text2 thq-body-small">
                Privacy Policy
              </span>
              <span className="thq-body-small footer-text3">
                Terms and Conditions
              </span>
              <span className="thq-body-small footer-text4">
                Cookies Policy
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  rootClassName: '',
}

Footer.propTypes = {
  rootClassName: PropTypes.string,
}

export default Footer
