const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/ecommerce")

.then(()=> console.log("DB Connetcted.."))
.catch((err)=>console.log(err))


// 