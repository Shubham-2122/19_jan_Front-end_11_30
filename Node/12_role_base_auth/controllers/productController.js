const Product = require("../model/Product")

const createProduct = async(req,res)=>{
    const product =await Product.create(req.body);

    res.status(201).json({
        message: "Product Added",
        product
    });
}

// get product

const getProducts = async(req,res)=>{
    const products = await Product.find();
    res.json(products)
}

module.exports = {
    getProducts,
    createProduct
}
 