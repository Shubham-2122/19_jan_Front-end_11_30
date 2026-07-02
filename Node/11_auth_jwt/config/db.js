const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/authsystem")

.then(()=>{
    console.log("database connected")
})

.catch((err)=>{
    console.log(err)
})
