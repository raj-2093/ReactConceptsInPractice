import React from 'react'

export default function FreeLayout({children}) {
  return (
    <>
    <h1>This is free layout</h1>
    <p>It doesn't have topnav</p>
      {children}
    </>
  )
}
