import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TodoDetails from './TodoDetails'
import { DeleteTodo } from './todoSlice'

function TodoList() {

    const {todos} = useSelector((state)=>state.todo)
    console.log(todos)

    const dispatch = useDispatch()

  return (
    <div>

       <TodoDetails />

      <ul>
        {
            todos && todos.map((data,index)=>{
                return(
                    <li key={index} style={{fontSize:"25px"}}>{data} <button>Edit</button> <button onClick={()=>dispatch(DeleteTodo(index))}>Delete</button></li>
                )
            })
        }
      </ul>
    </div>
  )
}

export default TodoList
