import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useParams } from 'react-router-dom'
const Subject = () => {

  const { subject } = useParams()

  return (
    <div>
      <h1>Subject : {subject}</h1>
      <Outlet />
    </div>
  )
}

export default Subject
