const express = require("express")

const route = express.Router()
const {createStudent,getAllstudent} = require("../controllers/studentControllers")

// post new data
route.post("/",createStudent);

route.get("/",getAllstudent)

module.exports = route;