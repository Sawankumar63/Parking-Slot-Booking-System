import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/dashboard.css";
const BookingConfirmation = () => {
  const { state } = useLocation();
  return <section className="dashboard-page"><div className="container" style={{maxWidth:700}}>
    <div className="form-card" style={{textAlign:"center"}}><div style={{fontSize:60}}>✅</div><h1>Booking Confirmed</h1><p className="text-muted">Your parking slot has been booked successfully.</p>{state?.bookingId && <p><strong>Booking ID: {state.bookingId}</strong></p>}<Link className="btn btn-primary" to="/booking-history">View Booking History</Link></div>
  </div></section>;
};
export default BookingConfirmation;
