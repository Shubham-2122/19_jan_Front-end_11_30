const Student = require("../models/Student")

// post 
const createStudent = async (req, res) => {
    try {
        const student = await Student.create(req.body);

        res.status(201).json({
            success: true,
            message: "Student Added",
            data: student
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

const getAllstudent=async(req,res)=>{
    try {
        const student = await Student.find();

        res.json(student)

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}



module.exports = {

    createStudent,getAllstudent
}