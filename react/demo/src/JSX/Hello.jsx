// jsx : javscript syntax  xml(exasti)
// jsx :  html read and wirte retrun 
// js vs jsx : Easy to use / 
// 0.1s fast 
// jsx : varibale data memeber 
// jsx {} javascript allow


import React from 'react'

function Hello() {

    console.log("hello jsx")
    let name = "shubham"
    console.log(name)

    let person = {
        name : "raj",
        age : 21,
        course : "front-end"
    }

    let tagname = <ul>
        <li>sadhil</li>
        <li>sadhil</li>
        <li>sadhil</li>
        <li>sadhil</li>
    </ul>

  return (
    <>
      <h1 className=''>Hello this JSX Componenet</h1>

      <h1>Your Name : {name}</h1>

      <h1>Name : {person.name} : coruse : {person.course}</h1>

    
      {
        5+5
      }
    
    {
        tagname
    }

    </>
  )
}

export default Hello
