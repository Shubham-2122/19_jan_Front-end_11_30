const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

    productName: String,

    quantity: Number,

    totalPrice: Number

});

module.exports = mongoose.model("Order", orderSchema);