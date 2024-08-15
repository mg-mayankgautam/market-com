import React, { useState } from 'react'
import Contact from '../components/Contact/Contact'
import Clients from '../components/Clients/Clients'
import Services from '../components/Services/Services'
import About from '../components/About/About'
import Hero from '../components/Hero/Hero'
import { motion, useScroll, useMotionValueEvent, color } from "framer-motion";


const HomePage = ({ about_ref, contact_ref }) => {

  const { scrollY } = useScroll(
  );
  const [scrollvar, setscrollvar] = useState(0)

  useMotionValueEvent(scrollY, "change", (latest) => {
    // console.log(latest);
    const height = document.body.clientHeight;
    setscrollvar(latest * 100 / height)
    // console.log(scrollvar)
  })


  return (
    <>
      <Hero contact_ref={contact_ref} />
      <About about_ref={about_ref} scrollvar={scrollvar} />

      <Services />
      <Clients />
      <Contact contact_ref={contact_ref} />
    </>
  )
}

export default HomePage