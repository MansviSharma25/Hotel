import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src="assets.logo" alt="" className="logo" />
<ul className="navbar-menu">
  <li className='red'>Home</li>
  <li>Menu</li>
  <li>Mobile App</li>
  <li>Contact Us</li>
</ul>

<div className="navbar-right">
  <img src="assets.search_icon" alt="" />
</div>
    </div>
  )
}

export default Navbar
