import React from "react";
import { Link } from "react-router-dom";
import "../css/parking-card.css";

const ParkingCard = ({ id, title, location, rating, price, image }) => (
  <article className="parking-card">
    <img src={image} alt={title} className="parking-card-image" />
    <h2>{title}</h2>
    <p className="parking-location">📍 {location}</p>
    <div className="parking-meta"><span>⭐ {rating}</span><strong>{price}</strong></div>
    <Link to={`/parking/${id || ""}`} className="parking-book-btn">View Details</Link>
  </article>
);
export default ParkingCard;
