// Function : Hooks : Reuse , state mantain 
// useState : react lib 
// react V16.8 Function , hooks 
// vari-type [state,setstate] = useState(value)
// hooks : return outside

import React, { useState } from 'react'
import ImageData from './ImageData'

function FuncState() {

    // define,setfunction = value
    const [name,setname] = useState("shubham jadav")
    const [count,setcount] = useState(0)
    const [isImage,setImage] = useState(true)
    // console.log(name)

    const data=()=>{
        setname("manthan")
    }
    const count1=()=>{
        setcount(count +2)
    }
    const count2=()=>{
        setcount(count -2)
    }
  return (
    <div>
      <h1>name : {name}</h1>
      <button onClick={()=>setname("sujal")}>change name</button>
      <button onClick={()=>setname("abhay")}>change name 2</button>
      <button onClick={data}>Change name 3</button>

      <h1>counter : {count}</h1>
      <button onClick={()=>setcount(count+1)}>Increment</button>
      <button onClick={()=>setcount(count-1)}>decrement</button>
      <button onClick={()=>setcount(0)}>Zero</button>
      <button onClick={count1}>increment by 2</button>
      <button onClick={count2}>decrement by 2</button>

    <br /> <br />

    <button onClick={()=>setImage(false)}>Hide</button>
     <button onClick={()=>setImage(true)}>Show</button>
     <button onClick={()=>setImage(!isImage)}>Toggle</button>
     

      {
        isImage ? <ImageData /> : false
      }
    </div>
  )
}

export default FuncState
