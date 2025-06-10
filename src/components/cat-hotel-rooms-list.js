import React from 'react'

import PropTypes from 'prop-types'

import './cat-hotel-rooms-list.css'

const CatHotelRoomsList = (props) => {
  return (
    <div
      className={`cat-hotel-rooms-list-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="cat-hotel-rooms-list-max-width thq-section-max-width thq-flex-column">
        <div className="cat-hotel-rooms-list-content thq-flex-column">
          <ul>
            <li className="cat-hotel-rooms-list-li1 list-item thq-flex-column">
              <h2 className="cat-hotel-rooms-list-heading1 thq-heading-2">
                🧁 Căsuțele Pisicești din PawXperience:
              </h2>
              <ul className="cat-hotel-rooms-list-ul2 thq-flex-column">
                <li className="list-item cat-hotel-rooms-list-li2">
                  <h3 className="cat-hotel-rooms-list-heading31 thq-heading-3">
                    ✨ Confort, liniște și un strop de magie pastelată!
                  </h3>
                </li>
                <li className="list-item cat-hotel-rooms-list-li3">
                  <h3 className="cat-hotel-rooms-list-heading32 thq-heading-3">
                    🎠 Cușete spațioase, sigure, aerisite
                  </h3>
                </li>
                <li className="list-item cat-hotel-rooms-list-li4">
                  <h3 className="cat-hotel-rooms-list-heading33 thq-heading-3">
                    🧸 Fiecare cușetă are 2–3 niveluri, perfecte pentru cățărat
                    și somn pufos.
                  </h3>
                </li>
                <li className="list-item cat-hotel-rooms-list-li5">
                  <h3 className="cat-hotel-rooms-list-heading34 thq-heading-3">
                    🧶 Acces zilnic la spațiul de joacă (individual), iar în
                    zilele frumoase – timp pe terasă.
                  </h3>
                </li>
                <li className="list-item cat-hotel-rooms-list-li6">
                  <h3 className="cat-hotel-rooms-list-heading35 thq-heading-3">
                    📲 Rezervă acum un loc moale și dulce pentru blănoasa ta!
                  </h3>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

CatHotelRoomsList.defaultProps = {
  rootClassName: '',
}

CatHotelRoomsList.propTypes = {
  rootClassName: PropTypes.string,
}

export default CatHotelRoomsList
