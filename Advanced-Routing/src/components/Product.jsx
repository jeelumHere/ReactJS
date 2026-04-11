import React from 'react'
import { Link, Outlet } from "react-router-dom";
const Product = () => {
  return (
    <div>
      <div className='prod'>
        <Link to='/product/men'>Men</Link>
        <Link to='/product/women'>Women</Link>
        <Link to='/product/kids'>Kids</Link>
      </div>
      <Outlet />

    </div>
  )
}
export default Product
