import React, { useState } from 'react'

function Funcobj() {

    const [data, setdata] = useState({
        name: "mohit",
        count: 1,
        isImage: true
    })

    console.log(data)

    return (
        <div>
            <h1>hello this State Data object</h1>
            <h1>name :  {data.name}</h1>

            <button onClick={() => setdata({...data,name: "shubham" })}>Change name</button>
            <button onClick={() => setdata({ ...data,name: "sujal" })}>Change name</button>

            <h1>Count : {data.count}</h1>
            <button onClick={()=>setdata({...data,count:data.count + 1})}>Increment</button>
             <button onClick={()=>setdata({...data,count:data.count - 1})}>decrement</button>
              <button onClick={()=>setdata({...data,count: 0})}>Zero</button>


        
        </div>
    )
}

export default Funcobj
