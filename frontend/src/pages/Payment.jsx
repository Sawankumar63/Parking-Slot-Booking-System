import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createBooking } from "../services/bookingService";
import "../css/payment.css";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const bookingData = location.state;

  if (!bookingData) {
    return (
      <section className="payment-page">
        <div className="payment-card">
          <h2>Payment Details Not Found</h2>
          <button onClick={() => navigate("/booking")}>
            Go Back to Booking
          </button>
        </div>
      </section>
    );
  }

  const { parkingId, vehicleNumber, bookingDate, startTime, endTime, amount } =
    bookingData;

  // const handlePayment = () => {
  //   navigate("/booking-confirmation", {
  //     state: {
  //       ...bookingData,
  //       paymentStatus: "success",
  //     },
  //   });
  // };

  const handlePayment = async () => {
    try {
      const data = await createBooking({
        parking_id: Number(parkingId),
        vehicle_number: vehicleNumber,
        booking_date: bookingDate,
        start_time: startTime,
        end_time: endTime,
      });

      navigate("/booking-confirmation", {
        state: {
          ...bookingData,
          bookingId: data.bookingId,
          paymentStatus: "success",
        },
      });
    } catch (error) {
      console.error(error);
      alert("Payment successful, but booking creation failed.");
    }
  };

  return (
    <section className="payment-page">
      <div className="payment-container">
        <h1 className="payment-title">Payment</h1>

        <p className="payment-subtitle">
          Complete your payment to confirm your parking booking.
        </p>

        <div className="payment-card">
          <h2>Booking Summary</h2>

          <div className="payment-details">
            <p>
              <strong>Parking ID:</strong> {parkingId}
            </p>

            <p>
              <strong>Vehicle:</strong> {vehicleNumber}
            </p>

            <p>
              <strong>Date:</strong> {bookingDate}
            </p>

            <p>
              <strong>Time:</strong> {startTime} - {endTime}
            </p>
          </div>

          <div className="payment-total">
            <span>Total Amount</span>
            <strong>₹{amount}</strong>
          </div>

          <button className="payment-button" onClick={handlePayment}>
            💳 Pay ₹{amount}
          </button>

          <button
            type="button"
            className="payment-cancel-button"
            onClick={() =>
              navigate("/booking", {
                state: {
                  paymentStatus: "cancelled",
                },
              })
            }
          >
            ❌ Cancel Payment
          </button>
        </div>
      </div>
    </section>
  );
};

export default Payment;
