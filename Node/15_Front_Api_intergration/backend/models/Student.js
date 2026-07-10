const mongoose = require("mongoose")

const studentSchema = mongoose.Schema({
    name:String,
    email:String,
    course:String
})

module.exports = mongoose.model("Student",studentSchema)
