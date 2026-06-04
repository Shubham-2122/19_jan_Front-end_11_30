import React from 'react'
import { useGetAdminQuery } from '../Slices/adminApi';
import { Link } from 'react-router-dom';

export default function AdminData() {
    const { data: admin = [], isLoading } = useGetAdminQuery();

    console.log(admin)
    return (
        <div>
            <h1>Hello this Admin Table Show</h1>

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
                            admin && admin.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>
                                            <button className='btn btn-info'>View</button>
                                            <Link className='btn btn-success mx-2'>Edit</Link>
                                            <button className='btn btn-danger' >Delete</button>
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
