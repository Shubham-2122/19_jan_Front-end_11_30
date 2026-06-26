const express = require("express")
const studentRoutes = require("./routes/studentRoutes")
const app = express()

// post data and put json read
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("Home page")
    res.end()
})

app.use("/",studentRoutes)

app.listen(5000,()=>{
    console.log(`server Runing : http://localhost:5000`)
})