import React from 'react'
import Navbar from './component/navbar/Navbar'
import Freelance from './component/freelanceBtn/freelance'
import Name from './component/myName/name'
import Frontend from './component/frontend/Frontend'
import Location from './component/location/Location'
import Footer from './component/footer/Footer'

const App = () => {
  return (
    <div className='portfolio'>
      <Navbar/>
      <Freelance/>
      <Name/>
      <Frontend/>
      <Location/>
      <Footer/>
    </div>
  )
}

export default App
