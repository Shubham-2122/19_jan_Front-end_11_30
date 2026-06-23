import express from "express";

const app = express()

// singel routes
app.get("/",(req,res)=>{
    console.log("Home",req.url,"method :",req.method)
    res.send("Home page")
    res.end();
})


app.listen(5000,()=>{
    console.log(`server runing : http://localhost:5000`)
})