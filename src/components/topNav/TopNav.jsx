import React from 'react'
import { Link } from 'react-router'
import { useAuth } from '../../contexts/AuthContext'

export default function TopNav() {
  const {isAuthenticated, logout} = useAuth();
  return (
    <>
    <nav>
      <ul type="none" style={{
        display: "flex",
        gap: "12px",
        padding: 0
      }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Core Concepts</Link></li>
        {!isAuthenticated && (<li><Link to="/login">Login</Link></li>)}
        <li><Link to="/about">About</Link></li>
        {isAuthenticated && (<li style={{
          marginLeft: "auto"
        }}><button onClick={()=>{
          logout();
        }}>Logout</button></li>)}
      </ul>
    </nav>
    </>
  )
}
