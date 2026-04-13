// effect : function side effect 
// Api calll , theme , load
// callback , api data call , ematy , [],[state]

import React, { useEffect, useState } from 'react'

function DataEffect() {

    const [name,setname] = useState("shubham")

    // 1) ematy data store
    // useEffect(()=>{
    //     console.log("effect outside")
    //     return(()=>{
    //         console.log("Effect inside")
    //     })
    // },)

    // 2) [] , blank array 
    //  useEffect(()=>{
    //     console.log("effect outside")
    //     return(()=>{
    //         console.log("Effect inside")
    //     })
    // },[])

    // 3) state pass [state]
     useEffect(()=>{
        console.log("effect outside")
        return(()=>{
            console.log("Effect inside")
        })
    },[name])

  return (
    <div>
      <h1>Hello this UseEffect call</h1>
      <h1>name : {name}</h1>
      <button onClick={()=>setname("sujal")}>Change name</button>
    </div>
  )
}

export default DataEffect
