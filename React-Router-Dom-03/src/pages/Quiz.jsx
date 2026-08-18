import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Quiz = () => {
  return (
    <div>
      <div><Link to={"/dashboard/personal/English/quiz/images"}>Images</Link></div>
      <div><Link to={"/dashboard/personal/English/quiz/files"}>Files</Link></div>
      <Outlet />
    </div>
  )
}

export default Quiz
