import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
const Notes = () => {
  const { section, subject } = useParams()
  return (
    <div>
      <div><Link to={`/dashboard/${section}/${subject}/notes/images`}>Images</Link></div>
      <div><Link to={`/dashboard/${section}/${subject}/notes/files`}>Files</Link></div>
      <Outlet />
    </div>
  )
}

export default Notes
