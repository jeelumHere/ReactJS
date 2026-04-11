import React from 'react'
import style from "../components/navbar.module.css";

import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className={style.nav}>
      <h3 className={style.logo}>SSA Coding</h3>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/product'>Product</Link>
      </div>
    </div>
  )
}

export default Navbar
