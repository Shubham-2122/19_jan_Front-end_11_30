import React from 'react'
import Header from '../Layout/Coman/Header'
import useCounter from './useCounter'
import useAPI from './useAPI'

function DataCounter() {

    const {count,increment,deccrement} = useCounter(2)

    const {user} = useAPI("https://jsonplaceholder.typicode.com/users")

  return (
    <div>
      <Header />
      <h1>Hello Counter Like Custom Hooks</h1>

      <h1>count : {count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={deccrement}>decrement</button>
    </div>
  )
}

export default DataCounter
