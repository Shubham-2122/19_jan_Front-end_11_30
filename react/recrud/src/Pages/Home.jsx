import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, userRead } from '../Slices/userSlice'
import { Link } from 'react-router-dom'

function Home() {

    const { users, loading} = useSelector((state) => state.user)
    // console.log(users)
    // console.log(loading)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userRead())
    }, [])

    return (
        <div>
            <h1>Hello this User Table Show</h1>

            <div className="container">
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Sr. No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users && users.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>
                                            <button className='btn btn-info'>View</button>
                                            <Link to={`/edit/${data.id}`} className='btn btn-success mx-2'>Edit</Link>
                                            <button className='btn btn-danger' onClick={()=>dispatch(deleteUser(data.id))} >Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Home
