const getusers = (req,res)=>{
    console.log("url ",req.url)
    res.send("All user ")
    res.end()
}

module.exports = {
    getusers
}