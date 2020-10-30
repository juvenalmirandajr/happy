import React from "react";
import { Map, Marker, TileLayer } from "react-leaflet";
import Leaflet from "leaflet";
import { FiArrowLeft, FiPlus } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import mapMarkerImg from "../images/map-marker.svg";
import "../styles/pages/create-orphanage.css";

const happyMapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60],
});

function CreateOrphanage() {
  const { goBack } = useHistory();
  return (
    <div id="page-create-orphanage">
      <aside>
        <img src={mapMarkerImg} alt="Happy marker" />
        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#fff" />
          </button>
        </footer>
      </aside>

      <main>
        <form action="" className="create-orphanage-form">
          <fieldset>
            <legend>Orphanage Info</legend>
            <Map
              center={[42.3555957, -71.0779056]}
              style={{ width: "100%", height: 280 }}
              zoom={15}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />
              <Marker
                interactive={false}
                icon={happyMapIcon}
                position={[42.3555957, -71.0779056]}
              />
            </Map>
            <div className="input-block">
              <label htmlFor="name">Name</label>
              <input id="name" />
            </div>
            <div className="input-block">
              <label htmlFor="about">
                About <span>Max 300 characters</span>
              </label>
              <textarea id="about" maxLength={300} />
            </div>
            <div className="input-block">
              <label htmlFor="images">Pictures</label>
              <div className="uploaded-image"></div>
              <button className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </button>
            </div>
          </fieldset>
          <fieldset>
            <legend>Visitor Hours / Guidelines</legend>
            <div className="input-block">
              <label htmlFor="instructions">Instructions</label>
              <textarea id="instructions" />
            </div>
            <div className="input-block">
              <label htmlFor="opening_hours">Opening Hours</label>
              <input id="opening_hours" />
            </div>
            <div className="input-block">
              <label htmlFor="open_on_weekends">Open On Weekends?</label>
              <div className="button-select">
                <button className="active" type="button">
                  Yes
                </button>
                <button className="" type="button">
                  No
                </button>
              </div>
            </div>
          </fieldset>
          <button className="confirm-button" type="submit">
            Submit
          </button>
        </form>
      </main>
    </div>
  );
}

export default CreateOrphanage;
