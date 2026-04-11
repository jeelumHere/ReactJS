import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Product from './components/Product'
import NotFound from './components/NotFound'
import Women from './Women'
import Men from './components/Men'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import Kids from './components/Kids'
import Dynamic from './components/Dynamic'
import Navbar2 from './components/Navbar2'
const App = () => {
  return (
    <div>
      <Navbar />

      {/* useNavigate dom routing usinf function starts here */}
      <Navbar2/>
      {/* usenavigate dom routing using function ends here */}



      {/* react routing dom starts here */}
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/contact' element={<Contact />} ></Route>


        {/* nested routing starts here  */}
        <Route path='/product' element={<Product />} >
          <Route path='/product/women' element={<Women />} ></Route>
          <Route path='/product/men' element={<Men />} ></Route>
          <Route path='/product/kids' element={<Kids />} ></Route>
        </Route>
        {/* nested routing ends here */}


        {/* dynamic routing for about starts here */}
        <Route path='/about/:aboutId' element={<Dynamic/>} ></Route>
        {/* dynamic routing for about ends here */}



        {/* invalid path roting starts here */}
        <Route path='*' element={<NotFound />} ></Route>
        {/* invalid path routing ends here */}


      </Routes>
      {/* react routing ends here  */}


      <Footer />
    </div>
  )
}

export default App
