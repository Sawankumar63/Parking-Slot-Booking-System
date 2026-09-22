const db = require("../config/db");

const createBooking = (
  userId,
  parkingId,
  vehicleNumber,
  bookingDate,
  startTime,
  endTime,
  callback
) => {
  const sql = `
    INSERT INTO bookings
    (user_id, parking_id, vehicle_number, booking_date, start_time, end_time)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [userId, parkingId, vehicleNumber, bookingDate, startTime, endTime],
    callback
  );
};

const getBookings = (userId, callback) => {
  const sql = `
    SELECT *
    FROM bookings
    WHERE user_id = ?
    ORDER BY booking_date DESC, start_time DESC
  `;

  db.query(sql, [userId], callback);
};

module.exports = {
  createBooking,
  getBookings,
};
