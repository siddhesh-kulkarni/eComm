import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../api/API";
export default function Signup() {
    const navigate = useNavigate();
    const [signup, setSignup] = useState({
        name: "",
        email: "",
        password: "",
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copySignupInfo = { ...signup };
        copySignupInfo[name] = value;
        setSignup(copySignupInfo);
      };
      console.log(signup);

      const handleSignup= async (e)=>{
        e.preventDefault();
        const { name, email, password} =signup;
        if(!name || !email || !password)
        {
            alert("All fields are required");
        }
        try{
            const response = await fetch(`${BASE_URL}signup`,{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(signup)
            });
            const result = await response.json();
            const {success, message} = result;
            if(success)
            {
                alert(message);
                navigate('/login');
            }
            else{
                alert(message);
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
          <h5 className="card-title text-center mb-4">User Signup</h5>
          <form onSubmit={handleSignup}>
          <div className="form-group mb-3">
              <label htmlFor="exampleInputEmail1">Name</label>
              <input
                type="text"
                name="name"
                value={signup.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter Name"
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                name="email"
                value={signup.email}
                onChange={handleChange}
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                name="password"
                value={signup.password}
                onChange={handleChange}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter password"
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Signup
            </button>
          </form>
          <div className="text-center">
          Already have account?
          <Link to="/login" className="text-decoration-none"> Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
