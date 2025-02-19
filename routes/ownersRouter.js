const express = require('express');
const router = express.Router();
const ownerModel = require("../models/owner-model");



if (process.env.NODE_ENV === "development") {
    router.post("/create", async function (req, res) {
      
        let owners = await ownerModel.find();
        if (owners.length > 0) {
            return res
                .status(503)
                .send("you don't have permission to create any other owner")
        }
        let {fullname, email, password} = req.body;
        let createdowner = await ownerModel.create({
            fullname,
            email,
            password
        });
        res.status(201).send(createdowner);
    });

};

router.get("/admin", (req, res) => {
    let success = req.flash("success");
    res.render("createproducts", { success });
});


module.exports = router;