console.log("hello")
const express = require("express")

const dotenv = require("dotenv")
dotenv.config()
require("./config/db")
const app = express()
app.use(express.json())


const authRoute = require("./routes/authRoute")
const productRoute =  require("./routes/productRoute")
const orderRoute = require("./routes/orderRoute")


app.use("/auth",authRoute);
app.use("/products",productRoute)
app.use("/orders",orderRoute)

app.listen(process.env.PORT,()=>{
    console.log(`Server Runing : http://localhost:5000`)
})