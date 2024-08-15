import React, { useState, useRef } from 'react'
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';


const Layout = ({about_ref, contact_ref}) => {

  return (
  
    <div className="App">
      
      <Nav about_ref={about_ref} contact_ref={contact_ref}/>

      <Outlet/> 

      <Footer/>
    </div>
    
  )
}

export default Layout
