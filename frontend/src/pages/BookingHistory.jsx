import React, { useEffect, useState } from "react";
import BookingCard from "../components/BookingCard";
import Loading from "../components/Loading";
import { getBookings } from "../services/bookingService";
import "../css/dashboard.css";
const BookingHistory = () => {
  const [bookings,setBookings]=useState([]); const [loading,setLoading]=useState(true); const [error,setError]=useState("");
  useEffect(()=>{getBookings().then(data=>setBookings(data.bookings||data.booking||[])).catch(e=>setError(e.message)).finally(()=>setLoading(false));},[]);
  return <section className="dashboard-page"><div className="container"><h1 className="page-title">Booking History</h1><p className="page-subtitle">Your previous parking bookings.</p>{loading?<Loading/>:error?<p className="error-text" style={{textAlign:"center",marginTop:40}}>{error}</p>:bookings.length?<div style={{marginTop:40}}>{bookings.map(b=><BookingCard key={b.id} booking={b}/>)}</div>:<p style={{textAlign:"center",marginTop:40}}>No bookings found.</p>}</div></section>;
};
export default BookingHistory;
