const db = require("../config/db");

const getAllParking = (callback) => {
  const sql = "SELECT * FROM parking";
  db.query(sql, callback);
};

module.exports = {
  getAllParking,
};
