const express = require("express")

const route = express.Router()

route.get("/student/:id/:name",(req,res)=>{

    console.log("url :",req.url," Method : ",req.method)
    const id = req.params.id
    const name = req.params.name

    res.send("student id : "+id+" name : "+name);
})

module.exports = route;
