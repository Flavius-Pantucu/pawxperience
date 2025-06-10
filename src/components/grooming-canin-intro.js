import React from 'react'

import PropTypes from 'prop-types'

import './grooming-canin-intro.css'

const GroomingCaninIntro = (props) => {
  return (
    <div className={`grooming-canin-intro-header76 ${props.rootClassName} `}>
      <div className="grooming-canin-intro-max-width thq-section-max-width">
        <div className="grooming-canin-intro-column1 thq-section-padding">
          <div className="grooming-canin-intro-container">
            <h1 className="grooming-canin-intro-heading11 thq-heading-1">
              PawXperience 🐾
            </h1>
            <h1 className="grooming-canin-intro-heading12 thq-heading-1">
              Grooming Canin 🐶
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h1>
          </div>
          <p className="grooming-canin-intro-content11 thq-body-large">
            La PawXperience, transformăm groomingul într-o experiență plăcută și
            relaxantă pentru patrupedul tău. Oferim băi blânde, tunsori
            personalizate și tratamente de îngrijire într-un spațiu curat și
            sigur.
          </p>
          <p className="grooming-canin-intro-content12 thq-body-large">
            Cu dragoste și profesionalism, ne asigurăm că fiecare cățel pleacă
            mai fericit, mai curat și mai stilat.
          </p>
        </div>
        <div className="grooming-canin-intro-content">
          <div className="grooming-canin-intro-column2">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="grooming-canin-intro-placeholder-image1 thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="grooming-canin-intro-placeholder-image2 thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="grooming-canin-intro-placeholder-image3 thq-img-ratio-1-1"
            />
          </div>
          <div className="grooming-canin-intro-column3">
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="grooming-canin-intro-placeholder-image4 thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="grooming-canin-intro-placeholder-image5 thq-img-ratio-1-1"
            />
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="grooming-canin-intro-placeholder-image6 thq-img-ratio-1-1"
            />
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="grooming-canin-intro-placeholder-image7 thq-img-ratio-1-1"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

GroomingCaninIntro.defaultProps = {
  image6Alt: 'Relaxing pet paradise environment',
  image5Alt: 'Variety of room types for cats',
  image4Alt: 'Happy cat in a cozy accommodation',
  image2Src:
    'https://images.unsplash.com/photo-1520580413066-ac45756bdc71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0ODYwMjM4NHw&ixlib=rb-4.1.0&q=80&w=1080',
  image3Alt: 'Professional cat grooming tools',
  image7Src:
    'https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0ODYwMjM4NXw&ixlib=rb-4.1.0&q=80&w=1080',
  image5Src:
    'https://images.unsplash.com/photo-1504826260979-242151ee45b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0ODYwMjM4NXw&ixlib=rb-4.1.0&q=80&w=1080',
  image3Src:
    'https://images.unsplash.com/photo-1570021974424-60e83dfee639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0ODYwMjM4NHw&ixlib=rb-4.1.0&q=80&w=1080',
  image2Alt: 'Luxurious cat hotel room',
  image1Src:
    'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0ODYwMjM4NHw&ixlib=rb-4.1.0&q=80&w=1080',
  rootClassName: '',
  image6Src:
    'https://images.unsplash.com/photo-1569285105724-89e18c990b7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0ODYwMjM4NXw&ixlib=rb-4.1.0&q=80&w=1080',
  image1Alt: 'Cat enjoying grooming session',
  image7Alt: 'High-quality pet care products',
  image4Src:
    'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0ODYwMjM4NXw&ixlib=rb-4.1.0&q=80&w=1080',
}

GroomingCaninIntro.propTypes = {
  image6Alt: PropTypes.string,
  image5Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image7Src: PropTypes.string,
  image5Src: PropTypes.string,
  image3Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image1Src: PropTypes.string,
  rootClassName: PropTypes.string,
  image6Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image7Alt: PropTypes.string,
  image4Src: PropTypes.string,
}

export default GroomingCaninIntro
