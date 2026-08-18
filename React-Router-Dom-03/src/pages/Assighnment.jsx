import React from 'react'
import { Outlet, useParams, Link } from 'react-router-dom'

const Assighnment = () => {
  const { section, subject } = useParams()
  return (
    <div>
      <div><Link to={`/dashboard/${section}/${subject}/assighnment/images`}>Images</Link></div>
      <div><Link to={`/dashboard/${section}/${subject}/assighnment/files`}>Files</Link></div>
      <Outlet />
    </div>
  )
}

export default Assighnment
