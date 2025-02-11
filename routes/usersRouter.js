const express = require('express');
const router = express.Router();
const userModle = require('../models/user-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {generateToken} = require("../utils/generateToken");
const {registerUser, loginUser, logout} = require("../controllers/authController")

router.get("/", (req, res) => {
    res.send("hey");
});

// registring user
router.post("/register", registerUser);

//user login
router.post("/login", loginUser);

// logout 
router.get("/logout", logout);


module.exports = router;