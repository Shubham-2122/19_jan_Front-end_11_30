import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function NotFound() {

    const redirect = useNavigate()

    const backto=()=>{
        redirect("/")
        console.log("hello")
    }

  return (
    <div>
      <h1 className='bg-danger text-light text-center p-5'>404 Not Found page</h1>
      <Link to="/" className='btn btn-success' >Back to home</Link>

      <button onClick={backto} className='btn btn-primary'>Back-to-home</button>
    </div>
  )
}

export default NotFound
