import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import ParkingCard from "../components/ParkingCard";
import Loading from "../components/Loading";
import { getParking } from "../services/parkingService";
import parking from "../assets/images/parking.png";
import airport from "../assets/images/airport.jpg";
import railway from "../assets/images/railway.jpg";
import "../css/parking.css";

const images = [parking, airport, railway];

const Parking = () => {
  const [parkingData, setParkingData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getParking()
      .then(data => setParkingData((data.parking || []).map((item,index) => ({
        ...item, rating:String(item.rating ?? "N/A"), price:`₹${item.price ?? 0}/hr`, image:images[index % images.length]
      }))))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return <section className="parking-page">
    <div className="container">
      <h1 className="page-title">Find Your Parking</h1>
      <p className="page-subtitle">Choose the best parking space near your destination</p>
      <SearchBar />
      {error && <p className="error-text" style={{textAlign:"center",marginTop:24}}>{error}</p>}
      <p className="parking-count">{parkingData.length} Parking Locations Available</p>
      <h2 style={{textAlign:"center",marginTop:40}}>Available Parking Spaces</h2>
      {loading ? <Loading /> : <div className="parking-list-grid">{parkingData.map(item => <ParkingCard key={item.id} {...item} />)}</div>}
    </div>
  </section>;
};
export default Parking;
