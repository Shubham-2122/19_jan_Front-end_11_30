// use Ref Real Dom : refrernce
// Re-reder stop 
// form triger 

import React, { useRef } from 'react'
import Header from '../Layout/Coman/Header'

function RefData() {

    const refelemet = useRef()

    const adddata=()=>{
        refelemet.current.focus();
    }
    const cssdata=()=>{
        refelemet.current.style.background = "blue"
         refelemet.current.style.color = "white"
    }

  return (
    <div>
        <Header />
        <h1>use Ref</h1>
        <input ref={refelemet} type="text" placeholder='Enter your Name' />
        <button onClick={adddata}>Add data</button>
        <button onClick={cssdata}>Add css</button>
    </div>
  )
}

export default RefData
