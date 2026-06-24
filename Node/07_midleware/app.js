// console.log("hello middleware")

const express = require("express")
const studentdata = require("./students")

const app = express()
// body parase
app.use(express.json())

app.use((req,res,next)=>{
    console.log("middlware called")
    next();
})

app.get("/",(req,res)=>{
    console.log("url :",req.url,"method :",req.method)
    console.log("home page")
    res.send("Home page")
})

// 2. Body Parser Middleware\

// json middlware data json to object data
// app.use(express.json())

// app.post("/user",(req,res)=>{
//     console.log("url :",req.url,"method :",req.method)

//     console.log("body :",req.body)

//     res.send("data recivied");
// })

app.use("/",studentdata);

app.listen(5000,()=>{
    console.log(`server runing : htpp://localhost:5000`)
})

