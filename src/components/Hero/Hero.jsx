import React from 'react'
import './Hero.css'

const Hero = ({contact_ref}) => {
  return (
    <div className='Hero'>

        <div className='subHeadHero'>
            Welcome to TechTonic !
        </div>

        <div className='mainHeadHero'>
            We craft digital experiences that move your customers.
        </div>

        {/* <button className='heroBtn'>Work with us!</button> */}
        <button 
              className='heroBtn'
              onClick={()=>{contact_ref.current?.scrollIntoView({behavior:'smooth'})}}
              >
                Work with us!
              </button>
    </div>
  )
}

export default Hero