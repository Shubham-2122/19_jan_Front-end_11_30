const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")

dotenv.config();

const app = express();

const connectDB = require("./config/db");

connectDB();
app.use(cors());

app.use(express.json());
app.use("/api/auth",require("./routes/authRoutes"));

app.listen(process.env.PORT,()=>{
    console.log(`server Runing on http://localhost:5000`)
})