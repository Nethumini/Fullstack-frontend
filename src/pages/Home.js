import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home() {

    const [users,setUsers] =useState([]);

    useEffect(() => {
        loadUsers();
    },[]);

    const loadUsers= async() => {
        const result = await axios.get("http://localhost:8080/users")
        setUsers(result.data);
    };


  return (
    <div className='container'>
        <div className='py-4'>
            <table className="table table-hover border shadow">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

    {
        users.map((user,index)=>(
        <tr key={index}>
            <th scope="row">{index+1}</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
              <button className="btn btn-success mx-2">View</button>
              <button className="btn btn-outline-secondary mx-2">Edit</button>
              <button className="btn btn-danger mx-2">Delete</button>
            </td>
        </tr>
        ))
    }
    
  </tbody>
</table>
      
        </div>
    </div>
  )
}
