const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");

const postTest = (req, res) => {
  console.log(req.body);

  res.json({
    message: "Data received successfully",
    data: req.body,
  });
};

const postRegister = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    if (!name || !email || !phone || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    userModel.createUser(
      name,
      email,
      phone,
      hashedPassword,
      (err, result) => {
        if (err) {
          console.error(err);

          if (err.code === "ER_DUP_ENTRY") {
            return res.status(409).json({
              message: "Email already registered",
            });
          }

          return res.status(500).json({
            message: "User registration failed",
          });
        }

        return res.status(201).json({
          message: "User registered successfully",
          userId: result.insertId,
        });
      }
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = {
  postTest,
  postRegister,
};
