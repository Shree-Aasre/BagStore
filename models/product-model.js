const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    
    image: String,
    name : String,
    price : Number,
    discount : {
        type: Number,
        default: 0
    },
    bgcolor : String,
    panalcolor : String,
    textcolor : String
});

module.expotrs = mongoose.model("product", productSchema);