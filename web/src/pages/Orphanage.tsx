import React from "react";
import { Link } from "react-router-dom";
import { Map, Marker, TileLayer } from "react-leaflet";
import Leaflet from "leaflet";
import { FiClock } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import mapMarkerImg from "../images/map-marker.svg";
import Sidebar from "../components/Sidebar";
import "../styles/pages/orphanage.css";

const happyMapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60],
});

function Orphanage() {
  return (
    <div id="page-orphanage">
      <Sidebar />
      <main>
        <div className="orphanage-details">
          <img
            src="https://adoption.com/wp-content/uploads/2019/02/Orphanages-in-the-US-624x416.jpg"
            alt="Boston Orphanage"
          />
          <div className="images">
            <button className="active" type="button">
              <img
                src="https://adoption.com/wp-content/uploads/2019/02/Orphanages-in-the-US-624x416.jpg"
                alt="Boston Orphanage"
              />
            </button>
            <button className="active" type="button">
              <img
                src="https://adoption.com/wp-content/uploads/2019/02/Orphanages-in-the-US-624x416.jpg"
                alt="Boston Orphanage"
              />
            </button>
            <button className="active" type="button">
              <img
                src="https://adoption.com/wp-content/uploads/2019/02/Orphanages-in-the-US-624x416.jpg"
                alt="Boston Orphanage"
              />
            </button>
            <button className="active" type="button">
              <img
                src="https://adoption.com/wp-content/uploads/2019/02/Orphanages-in-the-US-624x416.jpg"
                alt="Boston Orphanage"
              />
            </button>
            <button className="active" type="button">
              <img
                src="https://adoption.com/wp-content/uploads/2019/02/Orphanages-in-the-US-624x416.jpg"
                alt="Boston Orphanage"
              />
            </button>
            <button className="active" type="button">
              <img
                src="https://adoption.com/wp-content/uploads/2019/02/Orphanages-in-the-US-624x416.jpg"
                alt="Boston Orphanage"
              />
            </button>
          </div>
          <div className="orphanage-details-content">
            <h1>Boston Orphanage</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est ex
              ad minus, eos rem eum ullam excepturi quam aliquam nemo ipsa.
              Dolorem blanditiis nulla soluta ut aliquid voluptatum perspiciatis
              iusto.
            </p>
            <div className="map-container">
              <Map
                center={[42.3555957, -71.0779056]}
                zoom={16}
                style={{ width: "100%", height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
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
              <footer>
                <Link to="#">Get directions on Google Maps</Link>
              </footer>
            </div>
            <hr />
            <h2>Visitor Hours / Guidelines</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              repellat repellendus accusantium id, provident sit maiores commodi
              minus eaque autem numquam eveniet fugit consequatur aspernatur
              dolorum est iure possimus officiis.
            </p>
            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15b6d6" />
                Mon to Fri <br />
                8am to 6pm
              </div>
            </div>
            <button className="contact-button" type="button">
              <FaWhatsapp size={20} color="#fff" />
              Contact
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Orphanage;
