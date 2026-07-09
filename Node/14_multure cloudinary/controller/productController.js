const Product = require("../models/Product")
const cloudinary = require("../config/cloudinary")

// create image 
const createProduct = async (req, res) => {
    try {

        const product = await Product.create({
            name: req.body.name,
            price: req.body.price,

            image: req.file.path,

            public_id: req.file.filename
        });

        res.status(201).json({
            success: true,
            message: "Product Created",
            data: product
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// get products
const getProducts = async (req, res) => {

    const products = await Product.find();

    res.json(products);
}; 

const deleteProduct = async (req, res) => {

    try {

        const product = await Product.findById(req.params.id);

        // cloudinary image delete
        await cloudinary.uploader.destroy(
            product.public_id
        );

        // mongodb delete
        await Product.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: "Product Deleted"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


const updateProduct = async (req, res) => {

    try {

        const product = await Product.findById(req.params.id);

        // old image delete
        await cloudinary.uploader.destroy(
            product.public_id
        );

        // update new image
        const updatedProduct =
            await Product.findByIdAndUpdate(
                req.params.id,
                {
                    name: req.body.name,
                    price: req.body.price,

                    image: req.file.path,

                    public_id: req.file.filename
                },
                { new: true }
            );

        res.json({
            success: true,
            data: updatedProduct
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    createProduct,
    getProducts,
    deleteProduct,updateProduct
}