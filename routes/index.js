const express = require("express");
const router = express.Router();
const isloggedin = require('../middlewares/isLoggedin');
const productModel = require("../models/product-model");

router.get("/", (req, res) => {
    let error = req.flash("error");
    res.render("index", { error });
});

router.get("/shop", isloggedin, async (req, res) => {
   let products = await productModel.find();
    res.render("shop", { products });
});


module.exports = router;