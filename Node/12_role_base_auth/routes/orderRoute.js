
const express= require("express")

const router = express.Router()

const {createOrder,getOrders} = require("../controllers/orderController") 

const verifyToken = require("../middleware/authMiddleware")

// create Order 
router.post(
    "/",
    verifyToken,
    createOrder
)

// get
router.get(
    "/",
    verifyToken,
    getOrders
)

module.exports = router
