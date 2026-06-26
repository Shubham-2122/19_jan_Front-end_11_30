const express = require("express")
const route = express.Router()
const { getAllStudent, addStudent, StudentId,updateStudent, StudentCourse,deleteStudent } = require("../controllers/studentcontrollers")

// get method all
route.get("/student", getAllStudent)

// /post dada single add  
route.post("/student", addStudent)

// get course
route.get("/student/search",StudentCourse)

// get id 
route.get("/student/:id", StudentId)

// delet routes
route.delete("/student/:id",deleteStudent)

// put routes
route.put("/student/:id",updateStudent)


module.exports = route

