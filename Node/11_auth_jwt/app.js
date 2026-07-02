// console.log("hello")

const express = require("express")

const app = express()
require("./config/db")

app.use(express.json());
const userRoute = require("./router/userRoute")

app.use("/auth",userRoute)

app.listen(5000,()=>{
    console.log(`server Runing : http://localhost:5000`)
})