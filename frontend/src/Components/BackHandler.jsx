import React from 'react'
import { Navigate } from 'react-router-dom'
const BackHandler = ({children}) => {
    const isUserLoggedIn = localStorage.getItem("email");

  return isUserLoggedIn ? children : <Navigate to='/login'/> ;
}

export default BackHandler;
