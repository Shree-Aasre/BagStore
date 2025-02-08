const mongoose = require('mongoose');


const ownerSchema = mongoose.Schema({
    fullname: String,
    email : String,
    password: String,
    products:{
        type : Array,
        default: []
    },
    Gstin : String,
    picture: String
});

module.expotrs = mongoose.model("owner", ownerSchema);