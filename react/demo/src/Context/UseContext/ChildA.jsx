import React, { createContext, useState } from 'react'
import ChildD from './ChildD'
import ChildB from './ChildB'
import ChildC from './ChildC'

export const data = createContext()

function ChildA() {

    const [name,setname] = useState("nishat")
    const [form,setform] = useState({
        count:1
    })

  return (
    <div>
      <h1>Component A </h1>

    {/* 
        1) create 
        2) provide
        3) useContext
    */}

    <h1>A :{name}</h1>

    <data.Provider value={{name,setname,form,setform}}>
        <ChildB />
        <ChildC />
        <ChildD />
    </data.Provider>

    </div>
  )
}

export default ChildA
