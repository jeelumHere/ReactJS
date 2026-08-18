import React from 'react'
import { Outlet, Link, useParams } from 'react-router-dom'

const Quiz = () => {
  const { section, subject } = useParams()
  return (
    <div>
      <div><Link to={`/dashboard/${section}/${subject}/quiz/images`}>Images</Link></div>
      <div><Link to={`/dashboard/${section}/${subject}/quiz/files`}>Files</Link></div>
      <Outlet />
    </div>
  )
}

export default Quiz
