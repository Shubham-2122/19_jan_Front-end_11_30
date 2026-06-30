const express = require("express")

const route = express.Router()

const {createproduct,getALLproduct,ProductId,deleteProduct,updateproduct,categoryFind} = require("../controllers/productControllers")

// new Data
route.post("/",createproduct)

// category
route.get("/search",categoryFind);

// get id single product
route.get("/:id",ProductId);

// get all data
route.get("/",getALLproduct)

// delete
route.delete("/:id",deleteProduct);

// update
route.put("/:id",updateproduct);

module.exports = route

