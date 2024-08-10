import React from 'react'
import './Services.css'
import webdev from '../../assets/webdev.jpg'
import sm from '../../assets/socialmedia.jpg'
import seo from '../../assets/seo.jpg'
import cm from '../../assets/corporatemarketing.jpg'
import pdesign from '../../assets/packagedesign.jpg'
import appdev from '../../assets/appdev.avif'
import { useState } from 'react'

const Services = () => {

    const [showMoreServices, setshowMoreServices] = useState(false)

    const showMoreservices = ()=>{
        setshowMoreServices(prev=>!prev)
    }

    const [first, setfirst] = useState(true);
    const [second, setsecond] = useState(false);
    const [third, setthird] = useState(false);
    const [fourth, setfourth] = useState(false);
    const [fifth, setfifth] = useState(false);

    const toggle1 = () =>{
        if(!first)setfirst(e=>!e)

        if(second)setsecond(e=>!e)
        if(third)setthird(e=>!e)
        if(fourth)setfourth(e=>!e)
        if(fifth)setfifth(e=>!e)        

    }
    const toggle2 = () =>{
        if(!second)setsecond(e=>!e)

        if(first)setfirst(e=>!e)
        if(third)setthird(e=>!e)
        if(fourth)setfourth(e=>!e)
        if(fifth)setfifth(e=>!e)    

    }
    const toggle3 = () =>{
        if(!third)setthird(e=>!e)

        if(first)setfirst(e=>!e)
        if(second)setsecond(e=>!e)
        if(fourth)setfourth(e=>!e)
        if(fifth)setfifth(e=>!e)    



    }
    const toggle4 = () =>{
        if(!fourth)setfourth(e=>!e)


        if(first)setfirst(e=>!e)
        if(second)setsecond(e=>!e)
        if(third)setthird(e=>!e)             
        if(fifth)setfifth(e=>!e)    

    }
    const toggle5 = () =>{
      if(!fifth)setfifth(e=>!e)

      if(first)setfirst(e=>!e)
      if(second)setsecond(e=>!e)
      if(third)setthird(e=>!e)             
      if(fourth)setfourth(e=>!e)  
        

    }

  return (
    <div className='Services'>
        
        <div className='servicesHead'>OUR SERVICES</div>

        <div className='ServicesContainer'>

          <div className='serviceBox'>
            <div className='serviceImgDiv'>
                <img src={webdev} />
            </div>
            <div className='serviceContent'>
                <div className='serviceName'>
                    Website Development
                </div>
                <button className='serviceBtn'>
                    Read More
                </button>
            </div>
          </div> 

          <div className='serviceBox'>
            <div className='serviceImgDiv'>
                <img src={appdev} />
            </div>
            <div className='serviceContent'>
                <div className='serviceName'>
                    App Development
                </div>
                <button className='serviceBtn'>
                    Read More
                </button>
            </div>
          </div> 

          <div className='serviceBox'>
            <div className='serviceImgDiv'>
                <img src={pdesign} />
            </div>
            <div className='serviceContent'>
                <div className='serviceName'>
                    Product Design
                </div>
                <button className='serviceBtn'>
                    Read More
                </button>
            </div>
          </div> 

          <div className='serviceBox'>
            <div className='serviceImgDiv'>
                <img src={sm} />
            </div>
            <div className='serviceContent'>
                <div className='serviceName'>
                    Social Media Marketing
                </div>
                <button className='serviceBtn'>
                    Read More
                </button>
            </div>
          </div> 

          <div className='serviceBox'>
            <div className='serviceImgDiv'>
                <img src={cm} />
            </div>
            <div className='serviceContent'>
                <div className='serviceName'>
                    Corporate Strategy
                </div>
                <button className='serviceBtn'>
                    Read More
                </button>
            </div>
          </div> 

          <div className='serviceBox'>
            <div className='serviceImgDiv'>
                <img src={seo} />
            </div>
            <div className='serviceContent'>
                <div className='serviceName'>
                    Search Engine Optimization
                </div>
                <button className='serviceBtn'>
                    Read More
                </button>
            </div>
          </div> 

        </div>

        {showMoreServices?<></>:
            <button className='viewMoreBtn'
                onClick={()=>{showMoreservices()}}
            >
                View More services
            </button>
        }

        {showMoreServices?
            <div className='more_service_container'>
                <div className='headings'>
                    <div className='service_heading' onClick={()=>{toggle1()}}>service1</div>
                    <div className='service_heading' onClick={()=>{toggle2()}}>service2</div>
                    <div className='service_heading' onClick={()=>{toggle3()}}>service3</div>
                    <div className='service_heading' onClick={()=>{toggle4()}}>service4</div>
                    <div className='service_heading' onClick={()=>{toggle5()}}> service5</div>
                </div>
                <div className='content'>
                    {first? 
                    <div >service1
                        <div >service1.1

                        </div>
                        <div >service1.2

                        </div>
                    </div>:<></>}
                    {second?<div >service2</div>:<></>}
                    {third? <div >service3</div>:<></>}
                    {fourth?<div >service4</div>:<></>}
                    {fifth? <div >service5</div>:<></>}
                    

                    
                </div>
                

            </div>
        :<></>}

        

        

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