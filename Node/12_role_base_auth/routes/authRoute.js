const express = require("express")

const router = express.Router()
const {register,login} = require("../controllers/authController")

const verifyToken = require("../middleware/authMiddleware")

const adminMiddleware = require("../middleware/adminMiddleware")


router.post("/register",register)

// login

router.post("/login",login)

router.get("/profile",verifyToken,
    (req,res)=>{
        res.json({
            user:req.user
        })
    }
)

// admin route
router.get("/admin-dashboard",verifyToken,adminMiddleware,
    (req,res)=>{
        res.json({
            message:"Welcome Admin"
        })
    }
)

module.exports = router