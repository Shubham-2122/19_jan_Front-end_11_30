const Order = require("../model/Order")

// create order

const createOrder = async(req,res)=>{
    const order = await Order.create(req.body)

     res.status(201).json({
        message: "Order Created",
        order
    });
    
}

const getOrders = async (req, res) => {
    const orders = await Order.find();
    res.status(200).json(orders);
};

module.exports = {
    createOrder,
    getOrders
}
