import React from "react";
import { useNavigate } from "react-router-dom";
import car from "../assets/images/car.jpg";
import "../css/hero.css";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Find &amp; Book Parking Slots Easily</h1>
        <p>Book your parking slot in seconds. Safe, Secure and Affordable.</p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => navigate("/booking")}>Book Now</button>
          <button className="btn btn-outline" onClick={() => navigate("/parking")}>Explore Parking</button>
        </div>
      </div>
      <div className="hero-image-wrap"><img src={car} alt="Car" className="hero-image" /></div>
    </section>
  );
};
export default Hero;
