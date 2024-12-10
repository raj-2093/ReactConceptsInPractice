import React from 'react'
import { NavLink } from 'react-router'

export default function TopNav() {
  return (
    <>
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="">Core Concepts</NavLink></li>
        <li><NavLink to="">Home</NavLink></li>
        <li><NavLink to="">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </nav>
    </>
  )
}
