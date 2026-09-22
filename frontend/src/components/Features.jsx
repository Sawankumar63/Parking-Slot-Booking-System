import React from "react";
import "../css/features.css";
const featureData = [
  { id: 1, title: "Easy Booking", description: "Book your parking slot in seconds.", icon: "🚗" },
  { id: 2, title: "Secure Parking", description: "24/7 monitored parking areas.", icon: "🔒" },
  { id: 3, title: "Instant Confirmation", description: "Get booking confirmation instantly.", icon: "⚡" },
  { id: 4, title: "Online Payment", description: "Fast and secure online payments.", icon: "💳" },
];
const Features = () => (
  <section className="features">
    <h2>Why Choose ParkEase?</h2>
    <p>Smart, Secure and Hassle-Free Parking Experience</p>
    <div className="features-grid">{featureData.map(item => (
      <div className="feature-card" key={item.id}><div className="feature-icon">{item.icon}</div><h3>{item.title}</h3><p>{item.description}</p></div>
    ))}</div>
  </section>
);
export default Features;
