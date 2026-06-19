console.log("Task For local module")
const math = require('./clc')
const student = require("./students")
const product = require("./products")

// cla
console.log("Addition:", math.add(10, 5));  
console.log("Multiplication:", math.multiply(10, 5));

// student Output 
console.log(`Student name : ${student.name}`)
console.log(`Student course : ${student.course}`)
console.log(`Student city : ${student.city}`)


// products list 
console.log(`product List`)
console.log(product)

product.map((res)=>{
    console.log(`id : ${res.id} name : ${res.name} price : ${res.price} `)
})