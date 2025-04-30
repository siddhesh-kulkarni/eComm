import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {BASE_URL} from '../../api/API';

export default function Login() {
  const navigate = useNavigate();
  const [login,setLogin]=useState({
    email:"",
    password:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const copyloginInfo = { ...login };
    copyloginInfo[name] = value;
    setLogin(copyloginInfo);
  };
  console.log(login);

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const { email, password }=login;
    if(!email || !password)
    {
        alert('All fields are required');
    }
    try {
        const response = await fetch(`${BASE_URL}login`,{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(login)
        });
        const result = await response.json();
        const {success,error,message,email,name}=result;
        if(success)
        {
            localStorage.setItem("email",email);
            localStorage.setItem("name",name);
            alert(message);
            navigate('/');
        }
        else{
            alert(message||"Login Failed");
        }
    }
    catch(err)
    {
        console.log(err);
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card" style={{ width: "100%", maxWidth: "28rem" }}>
        <div className="card-body">
          <h5 className="card-title text-center mb-4">User Login</h5>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter email"
                value={login.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter password"
                value={login.password}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
          <div className="text-center">
            Don't have account?
            <Link to="/signup" className="text-decoration-none">
              {" "}
              Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
