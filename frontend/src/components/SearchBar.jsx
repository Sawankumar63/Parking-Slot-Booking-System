import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/searchbar.css";

const SearchBar = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [vehicle, setVehicle] = useState("Car");

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/parking?location=${encodeURIComponent(location)}&date=${date}&time=${time}&vehicle=${vehicle}`);
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input className="search-control" value={location} onChange={e => setLocation(e.target.value)} placeholder="📍 Enter Location" />
      <input className="search-control" type="date" value={date} onChange={e => setDate(e.target.value)} />
      <input className="search-control" type="time" value={time} onChange={e => setTime(e.target.value)} />
      <select className="search-control" value={vehicle} onChange={e => setVehicle(e.target.value)}>
        <option>Car</option><option>Bike</option><option>EV</option>
      </select>
      <button className="btn btn-primary" type="submit">Search</button>
    </form>
  );
};
export default SearchBar;
