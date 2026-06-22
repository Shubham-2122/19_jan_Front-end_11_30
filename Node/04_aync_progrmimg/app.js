// console.log("hello async fucntion")

// sync vs async 
// FileSync : bloking : runing 
// FilereadAsyc : non blocking 

// sync
// console.log(1)
// console.log(2)

// // hold
// setTimeout(()=>{
//    console.log("Hello") 
// },1000)
// console.log(3)
// console.log(4)

// node : single thrad : 


// Promise : State it's blue print Object 
// : state : resolve,reject 
// 1) pending 
// 2) fullfeild 
// 3) rejected

// const p = new Promise((res,rej)=>{
//     if(!res){
//         // console.log("Suuccess data")
//         res("Successfully data")
//     }
//     else{
//         rej("Danger data")
//     }
// })

// console.log(p)

// Async function 
// MVC 

// function demo(){
//     setTimeout(()=>{
//         console.log("hello demo")
//     },1000)
// }

// async function test() {
//     console.log(1)
//     console.log(2)
//     console.log(3)
//     await demo()
//     console.log(5)
//     console.log(6)
//     console.log(7)
// }

// test()
// const arr = ["red","green","blue"]
// console.log(arr[1])

// const [red,green,blue] = arr
// console.log(blue)

// try catch handling
// try {
//     console.log(a)
// } catch (error) {
//     console.log(error.message)
// }


function login(age){

    if(age < 18){
        throw new Error("Access Denied");
    }

    return "Welcome";
}

console.log(login(20));
