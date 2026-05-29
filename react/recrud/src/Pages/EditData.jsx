import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function EditData() {

    const { id } = useParams()
    // console.log(id)

    const { users, loading } = useSelector((state) => state.user)

    const [edit,setedit]= useState({
        id :"",
        name:"",
        password:"",
        email:""
    })

    useEffect(()=>{
        const singleuser =  users.filter((data) => data.id === id)
        console.log(singleuser[0])
        setedit(singleuser[0])
    },[])

    console.log(users)
    return (
        <div className='container'>
            <div className="row">
                <h1> Edit Form User</h1>
                <div className="col-md-6 mx-auto">
                    <form >
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">Enter Name</label>
                            <input type="text"  name='name' value={edit.name} className="form-control" id="Name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" name='email' value={edit.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" name='password' value={edit.password} className="form-control" id="exampleInputPassword1" />
                        </div>

                        <button type="submit" className="btn btn-primary">Edit user</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditData
