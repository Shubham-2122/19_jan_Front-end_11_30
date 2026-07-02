const express = require("express")
const route = express.Router();

const verifyToken = require("../middleware/authMiddleware")

const {login,register} = require("../controllers/authController")

// new register
route.post("/register",register)

// post login
route.post("/login",login);

route.get("/dashboard",verifyToken,(req,res)=>{
    res.json({
        message:"Proctected Route",
        user:req.user
    })
})

module.exports = route