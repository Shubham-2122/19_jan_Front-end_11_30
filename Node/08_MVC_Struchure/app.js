// console.log("Hello MVC Pattern")
const express = require("express")
const userRoute = require("./routers/userRouter")

const app = express()

app.get("/",(req,res)=>{
    res.send("home page")
    res.end()
})

app.use("/",userRoute)

app.listen(5000,()=>{
    console.log(`Server Runing : http://localhost:5000`)
})
