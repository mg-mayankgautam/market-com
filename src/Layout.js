import React from 'react'
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import Clients from './components/Clients/Clients';
import Pricing from './components/Pricing/Pricing';
import Contact from './components/Contact/Contact';


const Layout = () => {

  return (
  
    <div className="App">
      
      <Nav/>

      {/* <Outlet/> */}
      <Hero/>
      <About/>

      <Services/>
      <Clients/>
      <Pricing/>
      <Contact/>


      <Footer/>
    </div>
    
  )
}

export default Layout
