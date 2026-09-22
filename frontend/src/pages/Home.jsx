import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import ParkingCard from "../components/ParkingCard";
import parking from "../assets/images/parking.png";
import airport from "../assets/images/airport.jpg";
import railway from "../assets/images/railway.jpg";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import { getParking } from "../services/parkingService";
import { getProfile } from "../services/authService";
import "../css/home.css";

const images = [parking, airport, railway];

const Home = () => {
  const [user, setUser] = useState(null);
  const [parkingData, setParkingData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getProfile(), getParking()])
      .then(([profile, parkingResponse]) => {
        setUser(profile.user);
        setParkingData((parkingResponse.parking || []).map((item, index) => ({
          ...item,
          rating: String(item.rating ?? "N/A"),
          price: `₹${item.price ?? 0}/hr`,
          image: images[index % images.length],
        })));
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return <>
    {user && <div className="welcome"><h2>Welcome, {user.name} 👋</h2><p>{user.email}</p></div>}
    {error && <p className="home-error">{error}</p>}
    <Hero />
    <SearchBar />
    <section className="parking-section">
      <h2 className="parking-section-title">Popular Parking</h2>
      {loading ? <Loading /> : <div className="parking-grid">
        {parkingData.map(item => <ParkingCard key={item.id} {...item} />)}
      </div>}
    </section>
    <Features />
    <Footer />
  </>;
};
export default Home;
