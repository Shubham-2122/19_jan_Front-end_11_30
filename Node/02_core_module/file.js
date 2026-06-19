const fs = require("fs");

// console.log(fs)

// write 
//read
//delete


// blocking 
// console.log(1)
// fs.writeFileSync("demo.txt","Hello this file management system");
// console.log(2)
// console.log("file data successsfully printed")

// non-blocking : hold 
// console.log(1)
// fs.writeFile('test.txt',"Hello this Ascyc file",(err)=>{
//     if(err){
//         console.log("err")
//     }
//     else{
//         console.log("File Successfuly creted")
//     }
// })
// console.log(2)

// console.log("end")

// read mode 

// const data =  fs.readFileSync("test.txt") // buffer
const data =  fs.readFileSync("test.txt","utf-8") //read console

console.log(data) 

fs.readFile("demo.txt", (err, data) => {
    // console.log(data); // Buffer
    console.log(data.toString());
});

// delete file 

// fs.unlinkSync("test.txt")
// console.log("Demo file deleteed.. success")
