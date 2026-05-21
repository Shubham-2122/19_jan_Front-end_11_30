import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddTodo } from './todoSlice'

function TodoDetails() {
    
    const [name,setname] = useState("")

    const dispatch = useDispatch()

    const getsubmit=(e)=>{
        e.preventDefault()
        dispatch(AddTodo(name))
        setname("")
    }

    return (
        <div>
            <form action="" onSubmit={getsubmit}>
                <input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder='Enter Your Name' />
                <button>Add Data</button>
            </form>
        </div>
    )
}

export default TodoDetails
