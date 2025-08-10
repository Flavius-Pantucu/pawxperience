import React from "react";

import "./cat-hotel-rooms-list.css";

const detailsList = [
  "✨ Confort, liniște și un strop de magie pastelată!",
  "🎠 Cușete spațioase, sigure, aerisite",
  "🧸 Fiecare cușetă are 2–3 niveluri, perfecte pentru cățărat și somn pufos.",
  "🧶 Acces zilnic la spațiul de joacă (individual), iar în zilele frumoase – timp pe terasă.",
  "📲 Rezervă acum un loc moale și dulce pentru blănoasa ta!",
];

const CatHotelRoomsList = () => {
  return (
    <div className="cat-hotel-rooms-list-container thq-section-padding">
      <div className="cat-hotel-rooms-list-max-width thq-section-max-width thq-flex-column">
        <div className="cat-hotel-rooms-list-content thq-flex-column">
          <ul>
            <li className="cat-hotel-rooms-list-li list-item thq-flex-column">
              <h2 className="cat-hotel-rooms-list-heading thq-heading-2">
                🧁 Căsuțele Pisicești din PawXperience:
              </h2>
              <ul className="cat-hotel-rooms-list-details-ul thq-flex-column">
                {detailsList.map((detail, index) => (
                  <li className="list-item" key={index}>
                    <h3 className="cat-hotel-rooms-list-details-item-text">
                      {detail}
                    </h3>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CatHotelRoomsList;
