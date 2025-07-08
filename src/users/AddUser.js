import React, { useState } from 'react';
import axios from "axios";


export default function AddUser() {

    let navigate=useNavigate()

    const [user,setUser]=useState({
        name: "",
        username: "",
        email: ""
    });

    const{name,username,email}=user

    const onInputChange = (e) => {
        setUser({...user, [e.target.name]:e.target.value})
    };

    const onSubmit= async(e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/user", user);
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
            id="Name"
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
            id="Username"
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
            id="email"
            value={email}
            onChange={(e)=> onInputChange(e)}
          />
        </div>

        <button type="submit" className="btn btn-outline-primary mx-2 px-2">
         Submit   
         </button>

         <button type="submit" className="btn btn-outline-danger mx-2 px-2">
         Cancel   
         </button>
         </form>
      </div>
    </div>
    </div>
  );
}
