import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UserTableAx() {

     const [user, setuser] = useState([]);

    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata=async()=>{
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(res.data)
        setuser(res.data)
        } catch (error) {
            console.log("Api data not Found",error)
        }
    }

  return (
    <div>
      <h1>This is Axios</h1>
       <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#id</th>
              <th scope="col">name</th>
              <th scope="col">email</th>
              <th scope="col">city</th>
            </tr>
          </thead>
          <tbody>
            {user &&
              user.map((data) => {
                console.log(data);
                return (
                  <tr>
                    <th scope="row">{data.id}</th>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.address.city}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserTableAx
