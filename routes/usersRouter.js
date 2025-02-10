const express = require('express');
const router = express.Router();
const userModle = require('../models/user-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {generateToken} = require("../utils/generateToken");
const {registerUser} = require("../controllers/authController")

router.get("/", (req, res) => {
    res.send("hey");
});

router.post("/register", registerUser);

module.exports = router;