import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';


export default function AddUser() {

    let navigate = useNavigate();


    const [user,setUser]=useState({
        name: "",
        username: "",
        email: ""
    });

    const{name,username,email}= user;

    const onInputChange = (e) => {
        setUser({...user, [e.target.name]:e.target.value});
    };

    const onSubmit= async(e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/user", user)
        navigate("/")
    };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-5 shadow">
        <h2 className="text-center m-4">Register User</h2>

        <form onSubmit={(e)=> onSubmit(e)}>
        <div className="mb-3 d-flex align-items-center gap-2">
          <label htmlFor="Name" className="form-label mb-0" style={{ width: "120px" }}>
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            name='name'
            value={name}
            onChange={(e)=> onInputChange(e)}
          />
        </div>

        <div className="mb-3 d-flex align-items-center gap-2">
          <label htmlFor="Username" className="form-label mb-0" style={{ width: "120px" }}>
            User Name:
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your username"
            name='username'
            value={username}
            onChange={(e)=> onInputChange(e)}
          />
        </div>

        <div className="mb-3 d-flex align-items-center gap-2">
          <label htmlFor="email" className="form-label mb-0" style={{ width: "120px" }}>
            E-mail:
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your email address"
            name="email"
            value={email}
            onChange={(e)=> onInputChange(e)}
          />
        </div>

        <button className="btn btn-outline-primary mx-2 px-2" to="/">
         Submit   
         </button>

         
         </form>
      </div>
    </div>
    </div>
  );
}
