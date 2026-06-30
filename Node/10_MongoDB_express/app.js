// console.log("Hello javascript")
const express = require("express")
const app = express()
const productdata = require("./routes/productRoutes")
require("./config/db")

// middlaware
app.use(express.json())

app.use("/products",productdata)

app.listen(5000,()=>{
    console.log(`server Runing : http://localhost:5000`)
})
