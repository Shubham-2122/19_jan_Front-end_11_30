const express = require("express")

const app = express()

// singel routes
app.get("/",(req,res)=>{
    console.log("Home",req.url,"method :",req.method)
    res.send("Home page")
    res.end();
})

app.get("/about",(req,res)=>{
    console.log("About",req.url,"method :",req.method)
    res.send("about page")
    res.end();
})

app.listen(5000,()=>{
    console.log(`server runing : http://localhost:5000`)
})