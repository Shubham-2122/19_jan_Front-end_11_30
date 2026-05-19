import React from 'react'
import { useDispatch } from 'react-redux'
import { Zero } from './counterSlice'

function Count() {

    const dispatch = useDispatch()

  return (
    <div>
        <h1>This IS Only Reset Button</h1>
        <button onClick={()=>dispatch(Zero())}>Zero</button>
    </div>
  )
}

export default Count
