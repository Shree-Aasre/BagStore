const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    fullname: String,
    email : String,
    password: String,
    cart: {
        type : Array,
        default: []
    },
    isadmin: Boolean,
    order:{
        type : Array,
        default: []
    },
    contact : Number,
    picture: String
});

module.expotrs = mongoose.model("user", userSchema);