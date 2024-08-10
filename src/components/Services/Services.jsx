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
                    <div className='service_heading' onClick={()=>{toggle1()}}>DESIGN</div>
                    <div className='service_heading' onClick={()=>{toggle2()}}>DIGITAL MARKETING</div>
                    <div className='service_heading' onClick={()=>{toggle3()}}>DEVELOPEMENT</div>
                    <div className='service_heading' onClick={()=>{toggle4()}}>SEO</div>
                    <div className='service_heading' onClick={()=>{toggle5()}}>CONTENT WRITING</div>
                </div>
                <div className='content'>
                    {first? 
                    <div >
                        <div>UI/UX DESIGN</div>
                        <div>E-COMMERCE DESIGN</div>
                        <div>APP DESIGN</div>
                        <div>PRODUCT DESIGN</div>
                        <div>LOGO DESIGN</div>
                        <div>CARD DESIGN</div>
                        <div>SOCIAL MEDIA POST DESIGN</div>
                        <div>BANNER DESIGN</div>
                        <div>ADVERTISMENT DESIGN</div>
                        <div>CATALOGUE DESIGN</div>
                        
                        <div>Infographics Design</div>



                    </div>:<></>}

                    {second?
                    <div >
                        <div>FB MARKETING</div>
                        <div>INSTA MARKETING</div>
                        <div>X MARKETING</div>
                        <div>LINKEDIN MARKETING</div>
                        <div>AFFILIATE MARKETING</div>
                        <div>EMAIL MARKETING</div>
                        <div>VIDEO MARKETING</div>
                        <div>VIDEO EDITING</div>
                        <div>INSTA REEL EDITING</div>
                        <div>YOUTUBE SHORTS EDITING</div>

                    </div>:<></>}


                    {third? <div >
                        <div>CUSTOM WEBSITES</div>
                        <div>STATIC WEBSITES</div>
                        <div>PRODUCT WEBSITES</div>
                        <div>SHOPIFY DEVELOPEMENT</div>
                        <div>WORDPRESS DEVELOPMENT</div>
                        <div>IOS DEVELOPMENT</div>
                        <div>ANDROID DEVELOPMENT</div>
                        <div>ECOMMERCE WEBSITES</div>
                        <div>CMS(CONTENT Management SYSTEM)</div>
                        <div>YOUTUBE SHORTS EDITING</div>
                    </div>:<></>}

                    {fourth?<div >
                        <div>ON-PAGE SEO</div>
                        <div>OFF PAGE SEO</div>
                        <div>ECOMMERCE SEO</div>
                        <div>MULTILNGUAL SEO</div>
                        <div>ENTERPRISE SEO</div>
                        <div>YOUTUBE SEO</div>
                        <div>APP STORE OPTIMSATION</div>
                        {/* <div>ANDROID DEVELOPMENT</div>
                        
                        <div>CMS(CONTENT Management SYSTEM)</div>
                        <div>YOUTUBE SHORTS EDITING</div> */}
                    </div>:<></>}
                    {fifth? <div > <div>WEBSITE CONTENT WRITING</div></div>:<></>}
                    
                   
                    
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