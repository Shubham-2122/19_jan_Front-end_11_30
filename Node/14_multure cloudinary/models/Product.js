const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,

    image: String,

    public_id: String
})

module.exports = mongoose.model("Product", productSchema);

