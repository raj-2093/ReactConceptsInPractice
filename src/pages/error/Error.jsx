import React from 'react'
import { useNavigate } from 'react-router'

export default function Error() {
    let navigate = useNavigate();
    setTimeout(()=>{
        navigate("/")
    },5000)
  return (
    <div>
      <h1>Error Page</h1>
      <h5>This is an invalid route</h5>
      <h3>You will be redirected to the homepage</h3>
    </div>
  )
}
