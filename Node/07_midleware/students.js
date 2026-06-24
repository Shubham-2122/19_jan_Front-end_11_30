const express = require("express")

const route = express.Router()

route.post("/student",(req,res)=>{
    const name = req.body.name
    const course = req.body.course
    const city = req.body.city

    console.log("body :",req.body)
    console.log("Student Name:", name);
    console.log("Course:", course);
    console.log("City:", city);

    res.send("Student Registered Successfully");

})

module.exports = route
