import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "../css/dashboard.css";
const Dashboard = () => {
  const {user}=useAuth();
  return <section className="dashboard-page"><div className="container"><h1 className="page-title">Dashboard</h1><p className="page-subtitle">Welcome back, {user?.name || "User"}.</p>
    <div className="dashboard-grid">
      <Link className="dashboard-card" to="/booking"><h2>🚗 Book Parking</h2><p className="text-muted">Reserve a parking slot.</p></Link>
      <Link className="dashboard-card" to="/booking-history"><h2>📋 Booking History</h2><p className="text-muted">View your bookings.</p></Link>
      <Link className="dashboard-card" to="/profile"><h2>👤 Profile</h2><p className="text-muted">View your account.</p></Link>
    </div>
  </div></section>;
};
export default Dashboard;
