const parkingModel = require("../models/parkingModel");

const getParking = (req, res) => {
  parkingModel.getAllParking((err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        message: "Failed to fetch parking",
      });
    }

    return res.json({
      message: "Parking fetched successfully",
      parking: result,
    });
  });
};

module.exports = {
  getParking,
};
