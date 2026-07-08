const express = require("express")
const route = express.Router()
const upload = require("../middleware/upload")

route.post("/upload",
    upload.single("image"),
    (req,res)=>{
        res.json({
            message : "File Uploaded",
            file:req.file
        });
    }
)

module.exports = route
