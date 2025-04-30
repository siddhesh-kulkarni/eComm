import React, { useEffect, useState } from "react";

const Myaccount = () => {
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  useEffect(()=>{
    const name= localStorage.getItem("name");
    setName(name);
    const email = localStorage.getItem("email");
    setEmail(email);
    console.log(name);
  })
  return (
    <div className="container mt-3 d-flex justify-content-center align-items-center" style={{ height: "50vh", paddingTop: "0" }}>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title text-center">Created By:<br></br>{name}</h5>
          <p className="card-text text-center">
            {email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Myaccount;
