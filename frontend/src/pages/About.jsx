import React from "react";
import { useNavigate } from "react-router-dom";
import aboutImg from "../assets/images/about.jpg";
import "../css/parking.css";
import "../css/about.css";

const About = () => {
  const navigate = useNavigate();
  return <section className="page-section">
    <div className="container">
      <h1 className="page-title">About ParkEase</h1>
      <p className="page-subtitle">Smart Parking Solution for Modern Cities</p>
      <div className="about-layout">
        <img src={aboutImg} alt="About ParkEase" />
        <div>
          <h2>Making Parking Easier for Everyone</h2>
          <p>ParkEase is a smart parking platform that helps users find, book and manage parking spaces with ease. Our mission is to reduce the hassle of finding parking and provide a safe, fast and reliable parking experience for everyone.</p>
          <button className="btn btn-primary" onClick={() => navigate("/parking")}>Explore Parking</button>
        </div>
      </div>
    </div>
  </section>;
};
export default About;
