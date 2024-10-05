import React from 'react'
import "./Navbar.css"

//The general syntax of each component is similar to App.jsx.  We can simply type "rfce" to avial this syntax.

function Navbar() {
  return (
    <div className='navbar'>
      <ul>
        <li>Home</li>
        <li>Contact Us</li>
        <li>About</li>
      </ul>
    </div>
  )
}

export default Navbar
