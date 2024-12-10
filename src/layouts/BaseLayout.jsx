import React from 'react'
import TopNav from '../components/topNav/TopNav'

export default function BaseLayout({children}) {
  return (
    <>
    <h1>This is base layout</h1>
    <hr />
      <TopNav/>
      {children}
    </>
  )
}
