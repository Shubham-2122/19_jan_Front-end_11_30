const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    mobile:String,
    password:String,
    otp:String,
    otpExpire:Date,
    isVerified:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model("User",userSchema)