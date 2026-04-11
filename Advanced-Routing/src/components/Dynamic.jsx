import React from 'react'
import { useParams } from 'react-router-dom'

const Dynamic = () => {
    let dynamicRouting = useParams()
  return (
    <div>
      <h1>{dynamicRouting.aboutId} Dynamic Routing</h1>
    </div>
  )
}

export default Dynamic
