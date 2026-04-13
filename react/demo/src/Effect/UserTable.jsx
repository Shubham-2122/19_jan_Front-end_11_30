import React, { useEffect, useState } from "react";

function UserTable() {
  const [user, setuser] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = () => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data)
        setuser(data);
      })
      .catch((err) => {
        console.log("Api data not Found", err);
      });
  };

  return (
    <div>
      <h1>User Data Show</h1>
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
  );
}

export default UserTable;
