const express = require("express")

const app =  express()
// console.log("hello")

app.get("/",(req,res)=>{
    console.log("url :",req.url," Method : ",req.method)
    res.send("Home page")
    res.end()
})


// 1. Route Parameters

// app.get("/students/:id",(req,res)=>{
//     console.log("url :",req.url," Method : ",req.method)
    
//     // single id
//     const id = req.params.id

//     res.send("Student Id :"+id);
// })


// 2) multiple routes 
// app.get("/students/:id/:name",(req,res)=>{
//     console.log("url :",req.url," Method : ",req.method)
    
//     // single id
//     const id = req.params.id
//     const name = req.params.name

//     res.send("Student Id :"+id+" Name : "+name);
// })


//2. Query string search/filter માટે use થાય છે

// ?key=value
// app.get("/search",(req,res)=>{
//     console.log("url :",req.url," Method : ",req.method)

//     const productname = req.query.name;

//     res.send("Product Name : "+productname)
// })

// multiple query
app.get("/search",(req,res)=>{
    console.log("url :",req.url," Method : ",req.method)

    const productname = req.query.name;
    const productcate = req.query.category;

    if(!productname  || !productcate){
        console.log("err msg")
        res.end("Not Data found")
    }
    else{
        res.send("Product Name : "+productname+" Product category :"+productcate)
    }

    
})

app.listen(5000,()=>{
    console.log(`server Runing : http://localhost:5000`)
})

