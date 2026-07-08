const express = require("express")

const app = express()

app.use(express.json())

const uploadRoutes = require("./routes/uploadRoutes")

app.use("/uploads", express.static("uploads"));

app.use("/api",uploadRoutes)

app.listen(5000,()=>{
    console.log(`server Runing : http://localhost:5000`)
})