const http = require("http")

// console.log(http)

const server =  http.createServer((req,res)=>{
    // console.log(req.url,req.method)
    // console.log(res)
    res.write("welcome to first server page")
    res.end()
})

server.listen(5000)

console.log("server successfully run")
