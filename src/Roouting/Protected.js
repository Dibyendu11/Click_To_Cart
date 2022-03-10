import React from 'react';
import { Navigate,Outlet } from 'react-router-dom';


const Protected = () => {
 
    const isAuth=window.localStorage.getItem('Token Value:')
 
    return isAuth ? <Outlet/>: <Navigate to="/Unauth"></Navigate>
   
  
};

export default Protected;
