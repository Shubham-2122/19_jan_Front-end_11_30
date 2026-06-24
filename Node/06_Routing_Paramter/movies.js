const express = require("express")

const route = express.Router()

route.get("/movie", (req, res) => {
    const name = req.query.name;
    const category = req.query.category
    console.log("url :", req.url, " Method : ", req.method)

    res.send("movies Name :" + name + " category :"+ category)

})

module.exports = route
