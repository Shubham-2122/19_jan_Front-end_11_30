import React, { useContext } from 'react'
import { data } from './ChildA'

function ChildD() {

    const {name,setname} = useContext(data)

  return (
    <div>
      <h1>Component D </h1>
      <h1>D : {name}</h1>
      <button onClick={()=>setname("shubham jadav")}>Change Name</button>
    </div>
  )
}

export default ChildD
