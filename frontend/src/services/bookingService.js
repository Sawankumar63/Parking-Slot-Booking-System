import { apiRequest } from "./api";

export const createBooking = (booking) =>
  apiRequest("/api/bookings", {
    method: "POST",
    body: JSON.stringify(booking),
  });

export const getBookings = () => apiRequest("/api/bookings");