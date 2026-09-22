const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/test", userController.postTest);
router.post("/register", userController.postRegister);

module.exports = router;
