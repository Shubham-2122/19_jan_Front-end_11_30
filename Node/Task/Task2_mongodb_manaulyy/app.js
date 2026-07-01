console.log("hello")
const express = require("express")
require("dotenv").config()
const connectDb = require("./config/db")

const app = express()

app.use(express.json())

connectDb()

app.get("/",(req,res)=>{
    res.send("home page")
    res.end()
})

// console.log(process.env.MONGO_URL)
// console.log(process.env.PORT)

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server Runing : http://localhost:${PORT}`);
});