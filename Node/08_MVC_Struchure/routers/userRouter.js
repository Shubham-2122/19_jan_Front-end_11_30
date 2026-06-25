const express = require("express")
const {getusers} = require("../controllers/userController");

const route = express.Router()

route.get("/users",getusers);

module.exports = route
