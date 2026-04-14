import React, { useContext } from 'react'
import { data } from './ChildA'

function ChildC() {

    const {form,setform} = useContext(data)

  return (
    <div>
      <h1>Component C </h1>
      <h1> count : {form.count}</h1>
      <button onClick={()=>setform({...form,count : form.count + 1})}>Increment</button>
       <button onClick={()=>setform({...form,count : form.count - 1})}>decrement</button>
        <button onClick={()=>setform({...form,count : 0})}>Zero</button>
    </div>
  )
}

export default ChildC
