import React from 'react'
import { Outlet } from 'react-router-dom'

const Notes = () => {
  return (
    <div>
      I am Notes Page
      <Outlet/>
    </div>
  )
}

export default Notes
