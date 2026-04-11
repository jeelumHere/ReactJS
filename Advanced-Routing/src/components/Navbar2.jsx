import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    let navigate = useNavigate()
  return (
    <div className='navbar2'>
      <button className='routerBtn'
      onClick={()=>{
        navigate('/')
      }}
      >Back To Home Page</button>
      <button className='routerBtn'
      onClick={()=>{
        navigate(-1)
      }}
      >Back</button>
      <button className='routerBtn'
      onClick={()=>{
        navigate(+1)
      }}
      >Next</button>
    </div>
  )
}

export default Navbar2
