// console.log("hello 2")
const express = require("express")
const core = require("cors")
const dotenv = require("dotenv");

dotenv.config();
const studentRoute = require("./routes/studentRoute")

const app = express();

const connectDB = require("./config/db")
connectDB()

app.use(core());
app.use(express.json());

app.use("/students",studentRoute);

app.listen(process.env.PORT,()=>{
    console.log(`Server runing  http://localhost:5000`)
})
