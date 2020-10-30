import React from "react";
import { Map, Marker, TileLayer } from "react-leaflet";
import { FiPlus } from "react-icons/fi";
import Sidebar from "../components/Sidebar";
import mapIcon from "../utils/mapIcon";
import "../styles/pages/create-orphanage.css";

function CreateOrphanage() {
  return (
    <div id="page-create-orphanage">
      <Sidebar />
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
                icon={mapIcon}
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
