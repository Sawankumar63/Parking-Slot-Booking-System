const express = require("express");
const parkingController = require("../controllers/parkingController");

const router = express.Router();

router.get("/", parkingController.getParking);

module.exports = router;
