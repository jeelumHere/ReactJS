import React from 'react'
import style from '../navbar/navbar.module.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <h1 className={style.logo}>SSA Code</h1>
        <div>
            <Link to='/'>Home</Link>
            <Link to='/contact' >Contact</Link>
            <Link to='/product'>Product</Link>
            <Link to='/about'>About</Link>
        </div>
    </nav>
  )
}

export default Navbar


