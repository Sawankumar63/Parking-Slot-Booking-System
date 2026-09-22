const db = require("../config/db");

const createUser = (name, email, phone, password, callback) => {
  const sql =
    "INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, email, phone, password], callback);
};

const findUserByEmail = (email, callback) => {
  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], callback);
};

const findUserById = (userId, callback) => {
  const sql = "SELECT id, name, email, phone FROM users WHERE id = ?";
  db.query(sql, [userId], callback);
};

module.exports = {
  createUser,
  findUserByEmail,
  findUserById,
};
