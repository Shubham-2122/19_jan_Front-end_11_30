
const express = require("express")

const router = express.Router()

const {createProduct,getProducts} = require("../controllers/productController")

const verifyToken = require("../middleware/authMiddleware")

const adminMiddleware = require("../middleware/adminMiddleware")

// admin product create

router.post(
    "/",
    verifyToken,
    adminMiddleware,
    createProduct
)

router.get("/",getProducts)

module.exports = router