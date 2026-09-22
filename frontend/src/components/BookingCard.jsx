import React from "react";
import "../css/booking-card.css";
const BookingCard = ({ booking }) => (
  <article className="booking-card-item">
    <div><strong>Booking #{booking.id || booking.bookingId}</strong><p>{booking.vehicle_number || "Vehicle not available"}</p></div>
    <div className="booking-card-right"><span>{booking.booking_date || "Date not available"}</span><strong>{booking.status || "Confirmed"}</strong></div>
  </article>
);
export default BookingCard;
