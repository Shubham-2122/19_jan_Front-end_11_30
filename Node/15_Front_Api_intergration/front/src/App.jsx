import React from 'react'
import Studentform from './Studentform'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {

  const [student, setstudent] = useState([])

  useEffect(() => {
    fetchdata()
  }, [])

  const fetchdata = async () => {
    try {
      const res = await axios.get("http://localhost:5000/students")
      console.log(res.data)
      setstudent(res.data)
    } catch (error) {
      console.log("Api data not found", error)
    }
  }

  return (
    <div>
      <Studentform />

      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">name</th>
              <th scope="col">email</th>
              <th scope="col">course</th>
            </tr>
          </thead>
          <tbody>
           {
            student && student.map((data)=>{
              return(
                 <tr>
              <th scope="row">{data._id}</th>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.course}</td>
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

export default App