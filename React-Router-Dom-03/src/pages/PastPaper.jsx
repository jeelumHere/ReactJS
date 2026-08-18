import React from 'react'
import { Outlet, useParams, Link } from 'react-router-dom'

const PastPaper = () => {
  const { section, subject } = useParams()
  return (
    <div>
      <div><Link to={`/dashboard/${section}/${subject}/pastPaper/images`}>Images</Link></div>
      <div><Link to={`/dashboard/${section}/${subject}/pastPaper/files`}>Files</Link></div>
      <Outlet />
    </div>
  )
}

export default PastPaper
