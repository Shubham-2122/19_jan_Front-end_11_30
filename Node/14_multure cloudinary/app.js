const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const productRoutes = require("./routes/productRoutes")
dotenv.config();

const productRoutes = require("./routes/productRoutes")


const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB Connected"));

app.use("/products",productRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`server runing http://localhost:5000`)
})