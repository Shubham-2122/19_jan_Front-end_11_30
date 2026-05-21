import React from 'react'
import Counter from './features/Counter/Counter'
// import Count from './features/Counter/Count'
import TodoList from './features/Todo/TodoList'

function App() {
  return (
    <div>
      <h1>hello this Redux Application</h1>
      <Counter />
      {/* <Count /> */}

      <h1>Hello this TodoApplication</h1>
      <TodoList />
    </div>
  )
}

export default App
