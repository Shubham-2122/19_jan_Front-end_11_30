let students = []

// post function
const addStudent = (req,res)=>{
    students.push(req.body)

    res.status(201).json({
        "message":"student Successfully added"
    })
}

// get student id
const StudentId = (req,res)=>{
    const id = req.params.id 
    const student = students.find(s => s.id == id)
    if(student){
        res.status(200).json(student)
    }
    else{
        res.status(404).json({
            "message":"student not Found"
        })
    }
}

// getcourse 
const StudentCourse = (req,res)=>{
    const course = req.query.course
    const student = students.filter(
        s => s.course.toLowerCase() == course.toLowerCase()
    )

    if(student){
        res.status(200).json(student)
    }
    else{
        res.status(404).json({
            "message":"student course not Found"
        })
    }
}

// get all student
const getAllStudent = (req,res)=>{

    res.status(200).json(students)
}

// delete student

const deleteStudent = (req,res)=>{

    const id = req.params.id
    students = students.filter(s => s.id != id)

     res.status(200).json({
         message: "Student Deleted successfully"
    })
}

// update function
const updateStudent = (req,res)=>{
     const id = Number(req.params.id)
     const student = students.find(s => s.id == id)

     if(student){
        student.name = req.body.name
        student.course = req.body.course

        res.status(200).json({
              message: "Student Updated success"
        })
     }
     else{
         res.status(404).json({
            message: "Student Not Found"
        });
    }
}

module.exports = {
    addStudent,
    getAllStudent,
    StudentId,
    StudentCourse,
    deleteStudent,updateStudent
}
