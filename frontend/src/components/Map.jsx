import React from "react";
import "../css/map.css";
const Map = ({ location = "Parking location" }) => (
  <div className="map-placeholder"><span>📍</span><strong>{location}</strong><small>Map integration can be connected here.</small></div>
);
export default Map;
