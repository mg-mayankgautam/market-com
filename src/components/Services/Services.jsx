import React from 'react'
import './Services.css'
import webdev from '../../assets/webdev.jpg'
import sm from '../../assets/socialmedia.jpg'
import seo from '../../assets/seo.jpg'
import cm from '../../assets/corporatemarketing.jpg'
import pdesign from '../../assets/packagedesign.jpg'
import appdev from '../../assets/appdev.avif'

const Services = () => {
  return (
    <div className='Services'>
        
        <div className='servicesHead'>Our Services</div>

        <div className='ServicesContainer'>

          <div className='serviceBox'>
            <div className='serviceImgDiv'>
                <img src={webdev} />
            </div>
            <div></div>
          </div> 

          <div className='serviceBox'>
            <div className='serviceImgDiv'>
                <img src={appdev} />
            </div>
            <div></div>
          </div> 

          <div className='serviceBox'>
            <div className='serviceImgDiv'>
                <img src={pdesign} />
            </div>
            <div></div>
          </div> 

          <div className='serviceBox'>
            <div className='serviceImgDiv'>
                <img src={sm} />
            </div>
            <div></div>
          </div> 

          <div className='serviceBox'>
            <div className='serviceImgDiv'>
                <img src={cm} />
            </div>
            <div></div>
          </div> 

          <div className='serviceBox'>
            <div className='serviceImgDiv'>
                <img src={seo} />
            </div>
            <div></div>
          </div> 

        </div>
        

        {/* <div>Search Engine Optimization</div>
        <div>Digital Marketing</div>
        <div>Product Design</div>
        <div>Package Design</div>
        <div>Corporate Identity</div>
        <div>Social Media Strategy</div>
        <div>Social Media Marketing</div>
        <div>Social Media Marketing</div>

        <div>Web Development</div>
        <div>Mobile App Development</div>
        <div>IT Consulting, Support and Maintainance</div>
        <div>App Store Optimization</div>
        <div>Ecommerce Website</div>
        <div>Content Management System</div>
        <div>Search Engine Optimization</div>
        <div>Search Engine Optimization</div> */}





    </div>
    

  )
}

export default Services