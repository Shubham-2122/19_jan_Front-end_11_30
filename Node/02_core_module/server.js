const http = require("http")

// console.log(http)

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        console.log(`path : ${req.url} ${req.method} `)
        res.write("welcome to Home page")
        res.end();
    }
    else if (req.url == "/about") {
        console.log(`path :${req.url} ${req.method}`)
        res.write("welcome to About page")
        res.end();
    }
    else if (req.url == "/contact") {
        console.log(`path : ${req.url} ${req.method}`)
        res.write("welcome to Contact page")
        res.end();
    }
    else{
         console.log(`path :${req.url} ${req.method}`)
         res.end("not Found")
    }
})

server.listen(5000)

console.log("server successfully run")



