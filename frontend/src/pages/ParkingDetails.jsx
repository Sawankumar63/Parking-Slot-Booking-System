import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getParkingById } from "../services/parkingService";
import Map from "../components/Map";
import Loading from "../components/Loading";
import "../css/parking.css";

const ParkingDetails = () => {
  const { id } = useParams(); const [parking,setParking]=useState(null); const [error,setError]=useState(""); const [loading,setLoading]=useState(true);
  useEffect(()=>{getParkingById(id).then(setParking).catch(e=>setError(e.message)).finally(()=>setLoading(false));},[id]);
  if(loading) return <Loading/>; if(error) return <p className="error-text" style={{textAlign:"center",marginTop:60}}>{error}</p>;
  if(!parking) return <p style={{textAlign:"center",marginTop:60}}>Parking location not found.</p>;
  return <section className="page-section"><div className="parking-details">
    <h1 className="page-title">{parking.title || parking.name}</h1><p className="page-subtitle">📍 {parking.location}</p>
    <div className="form-card" style={{marginTop:40}}><h2>Parking Details</h2><p className="text-muted">Rating: ⭐ {parking.rating ?? "N/A"}</p><p>Price: <strong>₹{parking.price ?? 0}/hr</strong></p><Map location={parking.location}/><Link className="btn btn-primary" style={{marginTop:24}} to={`/booking?parking=${parking.id}`}>Book This Parking</Link></div>
  </div></section>;
};
export default ParkingDetails;
