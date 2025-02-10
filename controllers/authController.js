const express = require('express');
const router = express.Router();
const userModle = require('../models/user-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { generateToken } = require("../utils/generateToken");


module.exports.registerUser = async (req, res) => {
    try {
        let { email, password, fullname } = req.body;

        let user = await userModle.findOne({ email: email })
        
        if (user) return res.status(401).send("you already have account, please login");

        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {
                if (err) return res.send(err.message);
                else {
                    // Stored hash in your password DB.

                    let user = await userModle.create({
                        email,
                        password: hash,
                        fullname
                    });
                    // sending token to browser for user authentication 

                    let token = generateToken(user);
                    res.cookie("token", token);
                    res.send("user created successfully");
                };


            });
        });



    }
    catch (err) {
        res.send(err.message);

    };
};