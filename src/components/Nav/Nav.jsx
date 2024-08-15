import React from 'react'
import './Nav.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { useRef } from 'react'

const Nav = ({ about_ref, contact_ref }) => {

  return (
    <div className='Nav'>
      <div>
        <img src={logo} className='logo' />
      </div>

      <div className='navItems'>
      <Link to={'/'} >
      <div ><button className='nav_btn'>Home</button></div>
      </Link>
       

        <div>
          <button
            className='nav_btn'
            onClick={() => { about_ref.current?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            About
          </button>
        </div>

        <div>
          <button
            className='nav_btn'
            onClick={() => { contact_ref.current?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  )
}

export default Nav