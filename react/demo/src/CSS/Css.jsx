import React from 'react'
import "./style.css"

function Css() {

  let internalcss = {
    backgroundColor : "blue",
    color:"white",
    padding:"30px"
  }

  return (
    <div>
      <h1>Hello this Css data show</h1>

      {/* this css  */}
      {/* 1) inline  */}
      <h1 style={{backgroundColor:"lightcoral",color:"white"}}>Hello this inline css</h1>

      {/* 2) internal : react allow */}
      <h1 style={internalcss}>Hello this internal css</h1>

      {/* 3) external  */}

      <div className="main">
        this is div tag
      </div>
    </div>
  )
}

export default Css
