import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import logoImg from "../images/logo.svg";
import "../styles/pages/landing.css";

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="logo Happy" />

        <main>
          <h1>Delivering happiness to the world</h1>
          <p>Change many children's day visiting an orphanage.</p>
        </main>

        <div className="location">
          <strong>Boston</strong>
          <span>Massachusetts</span>
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </div>
    </div>
  );
}

export default Landing;
