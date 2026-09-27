
const mysql = require("mysql2");
const fs = require("fs");
const path = require("path");


const db = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 4000,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || "parkease",

  ssl: {
    rejectUnauthorized: true,
    ca: fs.readFileSync(
      path.resolve(__dirname, "..", process.env.DB_CA),
      "utf8"
    ),
  },

  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 10000,

});


db.getConnection((err, connection) => {
  if (err) {
    console.error("TiDB connection failed:", err.message);
    return;
  }

  console.log("TiDB Cloud connected successfully");
  connection.release();
});

module.exports = db;
