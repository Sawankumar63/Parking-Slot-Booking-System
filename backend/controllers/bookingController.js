const bookingModel = require("../models/bookingModel");

const createBooking = (req, res) => {
  const {
    parking_id,
    vehicle_number,
    booking_date,
    start_time,
    end_time,
  } = req.body;

  if (
    !parking_id ||
    !vehicle_number ||
    !booking_date ||
    !start_time ||
    !end_time
  ) {
    return res.status(400).json({
      message: "All booking fields are required",
    });
  }

  bookingModel.createBooking(
    req.user.userId,
    parking_id,
    vehicle_number,
    booking_date,
    start_time,
    end_time,
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({
          message: "Booking failed",
        });
      }

      return res.status(201).json({
        message: "Booking created successfully",
        bookingId: result.insertId,
      });
    }
  );
};

const getBookings = (req, res) => {
  bookingModel.getBookings(req.user.userId, (err, result) => {
    if (err) {
      console.error(err);

      return res.status(500).json({
        message: "Failed to fetch bookings",
      });
    }

    return res.status(200).json({
      bookings: result,
    });
  });
};

module.exports = {
  createBooking,
  getBookings,
};
