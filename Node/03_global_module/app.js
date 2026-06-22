// console.log("hello global modules")
// npm : node package manager

// 3rth praty depe
// npm init -y : yes
// npm init : manully code

// console.log("hello shubham jadav")

// 1) nodemon
// npm install -g nodemon
// console.log("helli dev mernstack")

// const chalk = require("chalk")

// // core
// const http = require("http")

// console.log(chalk.red("hello Unsuccessfully"))
// console.log(chalk.green("Successfully"))

// const server = http.createServer((req,res)=>{
//     if(req.url == "/"){
//         console.log("req",req.url , "req method ",req.method)
//         res.write("Home page")
//         res.end();
//     }
//     else if(req.url == "/about"){
//         console.log("req",req.url , "req method ",req.method)
//         res.write("About page")
//         res.end();
//     }
//     else{
//         res.end("404 not found")
//     }
// })

// server.listen(5000)
// console.log(`http://localhost:5000`)

const express = require("express")

const app = express()

// console.log(app)

app.get("/", (req, res) => {
    console.log("req", req.url, "req method ", req.method)
    res.send("Home page")
    res.end();
})

app.get("/about", (req, res) => {
    console.log("req", req.url, "req method ", req.method)
    res.write("About page")
    res.end();
})


app.listen(5000,()=>{
    console.log(`server Runing : http://localhost:5000`)
})

