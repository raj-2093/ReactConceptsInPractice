import React, { useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router';

export default function Login() {
  const {login, isAuthenticated} = useAuth();
  let navigate = useNavigate();
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={()=>{
        login();
        navigate("/");
      }}>Login</button>
    </div>
  )
}
