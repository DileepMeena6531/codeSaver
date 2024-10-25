import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div id='navLink'>
           <NavLink style={{color:"black", fontWeight:'700px',fontSize:"22px",textDecoration:"none"}} to={'/'}>Home</NavLink>
        </div>

        <div id='navLink'>
           <NavLink style={{color:'black', fontWeight:'700px',fontSize:"22px",textDecoration:"none"}} to={'/pastes'}>Paste</NavLink>
        </div>
        
    </div>
  )
}

export default Navbar