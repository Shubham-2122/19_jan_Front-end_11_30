import React from 'react'

function D({name,setname}) {
  return (
    <div>
      <h1>A Compoenent</h1>
      <h1>D : {name}</h1>
      <button onClick={()=>setname("sujal jadav")}>Change name</button>
    </div>
  )
}

export default D
