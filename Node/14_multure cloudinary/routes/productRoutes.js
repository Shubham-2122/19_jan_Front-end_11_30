const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");

const {createProduct,getProducts,deleteProduct,updateProduct} = require("../controller/productController")

router.post("/",
    upload.single("image"),
    createProduct
)

router.get("/",getProducts)

router.delete("/:id",deleteProduct)

router.put("/:id",
    upload.single("image"),
    updateProduct
)

module.exports = router;