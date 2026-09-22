import { apiRequest } from "./api";
export const createBooking = (booking) => apiRequest("/bookings", { method:"POST", body:JSON.stringify(booking) });
export const getBookings = () => apiRequest("/bookings");
