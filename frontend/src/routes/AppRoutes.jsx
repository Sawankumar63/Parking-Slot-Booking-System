import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Parking from "../pages/Parking";
import ParkingDetails from "../pages/ParkingDetails";
import Booking from "../pages/Booking";
import BookingConfirmation from "../pages/BookingConfirmation";
import Dashboard from "../pages/Dashboard";
import BookingHistory from "../pages/BookingHistory";
import Profile from "../pages/Profile";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import OwnerDashboard from "../owner/OwnerDashboard";
import ManageParking from "../owner/ManageParking";
import ManageSlots from "../owner/ManageSlots";
import OwnerBookings from "../owner/OwnerBookings";
import Analytics from "../owner/Analytics";
import Payment from "../pages/Payment";

const AppRoutes = () => (
  <Routes>
    {/* Authentication Pages */}
    <Route path="/" element={<Navigate to="/login" replace />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />
    <Route path="/reset-password" element={<ResetPassword />} />

    <Route path="/about" element={<About />} />
    <Route path="/parking" element={<Parking />} />
    <Route path="/parking/:id" element={<ParkingDetails />} />


    <Route
      path="/home"
      element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      }
    />
    <Route
      path="/booking"
      element={
        <ProtectedRoute>
          <Booking />
        </ProtectedRoute>
      }
    />

        <Route
      path="/payment"
      element={
        <ProtectedRoute>
          <Payment />
        </ProtectedRoute>
      }
    />
    
    <Route
      path="/booking-confirmation"
      element={
        <ProtectedRoute>
          <BookingConfirmation />
        </ProtectedRoute>
      }
    />
    <Route
      path="/dashboard"
      element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }
    />
    <Route
      path="/booking-history"
      element={
        <ProtectedRoute>
          <BookingHistory />
        </ProtectedRoute>
      }
    />
    <Route
      path="/profile"
      element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      }
    />
    <Route
      path="/owner"
      element={
        <ProtectedRoute>
          <OwnerDashboard />
        </ProtectedRoute>
      }
    />
    <Route
      path="/owner/parking"
      element={
        <ProtectedRoute>
          <ManageParking />
        </ProtectedRoute>
      }
    />
    <Route
      path="/owner/slots"
      element={
        <ProtectedRoute>
          <ManageSlots />
        </ProtectedRoute>
      }
    />
    <Route
      path="/owner/bookings"
      element={
        <ProtectedRoute>
          <OwnerBookings />
        </ProtectedRoute>
      }
    />
    <Route
      path="/owner/analytics"
      element={
        <ProtectedRoute>
          <Analytics />
        </ProtectedRoute>
      }
    />
    <Route path="*" element={<Navigate to="/login" replace />} />
  </Routes>
);
export default AppRoutes;
