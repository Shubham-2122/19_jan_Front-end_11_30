// complex state manage 

import React, { useReducer } from 'react'
import Header from '../Layout/Coman/Header'

const inintialstate = 0

export const reducer=(state,action)=>{
    switch (action) {
        case 'increment':
            return state += 1
            break;
        case 'decrement':
            return state-= 1
            break;

        case 'zero':
            return state = 0
            break;

        default:
            return inintialstate
            break;
    }
}


function Reducerdata() {

    const [count,dispatch] = useReducer(reducer,inintialstate)

    console.log(count)

    return (
        <div>
            <Header />
            <h1>Hello Reducer functionliy</h1>

            <h1>Count : {count}</h1>
            <button onClick={()=>dispatch('increment')}>Increment</button>
             <button onClick={()=>dispatch('decrement')}>decrement</button>
                <button onClick={()=>dispatch('zero')}>Zero</button>

        </div>
    )
}

export default Reducerdata
