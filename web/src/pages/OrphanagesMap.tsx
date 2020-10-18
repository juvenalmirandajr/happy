import React from "react";
import { Link } from "react-router-dom";
import { Map, TileLayer } from "react-leaflet";
import { FiPlus } from "react-icons/fi";
import mapMarkerImg from "../images/map-marker.svg";
import "leaflet/dist/leaflet.css";
import "../styles/pages/orphanages-map.css";

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy marker" />
          <h2>Choose an orphanage on the map</h2>
          <p>The kids are waiting for your visit :)</p>
        </header>

        <footer>
          <strong>Boston</strong>
          <span>Massachusetts</span>
        </footer>
      </aside>

      <Map
        center={[42.3555957, -71.0779056]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;