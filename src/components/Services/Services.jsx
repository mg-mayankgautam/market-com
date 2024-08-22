import React from 'react'
import './Services.css'
import webdev from '../../assets/webdev.png'
import sm from '../../assets/socialmedia.png'
import seo from '../../assets/seo.png'
import cm from '../../assets/corporatemarketing.png'
import pdesign from '../../assets/packagedesign.png'
import appdev from '../../assets/appdev.avif'
import { useState } from 'react'
import { Link } from 'react-router-dom'

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
                <img src={webdev} loading='lazy'/>
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
                <img src={appdev} loading='lazy'/>
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
                <img src={pdesign} loading='lazy'/>
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
                <img src={sm} loading='lazy'/>
            </div>
            <div className='serviceContent'>
                <div className='serviceName'>
                    Social Media Marketing
                </div>
                <button className='serviceBtn'>
                    <Link to="/service/socialmedia">Read More</Link>
                    
                </button>
            </div>
          </div> 

          <div className='serviceBox'>
            <div className='serviceImgDiv'>
                <img src={cm} loading='lazy'/>
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
                <img src={seo} loading='lazy'/>
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
                    <div className={first? 'service_heading selected':'service_heading'} onClick={()=>{toggle1()}}>DESIGN</div>
                    <div className={second? 'service_heading selected':'service_heading'} onClick={()=>{toggle2()}}>DIGITAL MARKETING</div>
                    <div className={third? 'service_heading selected':'service_heading'} onClick={()=>{toggle3()}}>DEVELOPEMENT</div>
                    <div className={fourth? 'service_heading selected':'service_heading'} onClick={()=>{toggle4()}}>SEO</div>
                    <div className={fifth? 'service_heading selected':'service_heading'} onClick={()=>{toggle5()}}>CONTENT WRITING</div>
                </div>

                <div className='content'>
                    {first? 
                    <div >
                        <div className='service'>UI/UX DESIGN</div>
                        <div className='service'>E-COMMERCE DESIGN</div>
                        <div className='service'>APP DESIGN</div>
                        <div className='service'>PRODUCT DESIGN</div>
                        <div className='service'>LOGO DESIGN</div>
                        <div className='service'>CARD DESIGN</div>
                        <div className='service'>SOCIAL MEDIA POST DESIGN</div>
                        <div className='service'>BANNER DESIGN</div>
                        <div className='service'>ADVERTISMENT DESIGN</div>
                        <div className='service'>CATALOGUE DESIGN</div>
                        
                        <div className='service'>Infographics Design</div>



                    </div>:<></>}

                    {second?
                    <div >
                        <div className='service'>FB MARKETING</div>
                        <div className='service'>INSTA MARKETING</div>
                        <div className='service'>X MARKETING</div>
                        <div className='service'>LINKEDIN MARKETING</div>
                        <div className='service'>AFFILIATE MARKETING</div>
                        <div className='service'>EMAIL MARKETING</div>
                        <div className='service'>VIDEO MARKETING</div>
                        <div className='service'>VIDEO EDITING</div>
                        <div className='service'>INSTA REEL EDITING</div>
                        <div className='service'>YOUTUBE SHORTS EDITING</div>

                    </div>:<></>}


                    {third? <div >
                        <div className='service'>CUSTOM WEBSITES</div>
                        <div className='service'>STATIC WEBSITES</div>
                        <div className='service'>PRODUCT WEBSITES</div>
                        <div className='service'>SHOPIFY DEVELOPEMENT</div>
                        <div className='service'>WORDPRESS DEVELOPMENT</div>
                        <div className='service'>IOS DEVELOPMENT</div>
                        <div className='service'>ANDROID DEVELOPMENT</div>
                        <div className='service'>ECOMMERCE WEBSITES</div>
                        <div className='service'>CMS(CONTENT Management SYSTEM)</div>
                        <div className='service'>YOUTUBE SHORTS EDITING</div>
                    </div>:<></>}

                    {fourth?<div >
                        <div className='service'>ON-PAGE SEO</div>
                        <div className='service'>OFF PAGE SEO</div>
                        <div className='service'>ECOMMERCE SEO</div>
                        <div className='service'>MULTILNGUAL SEO</div>
                        <div className='service'>ENTERPRISE SEO</div>
                        <div className='service'>YOUTUBE SEO</div>
                        <div className='service'>APP STORE OPTIMSATION</div>
                        {/* <div>ANDROID DEVELOPMENT</div>
                        
                        <div>CMS(CONTENT Management SYSTEM)</div>
                        <div>YOUTUBE SHORTS EDITING</div> */}
                    </div>:<></>}
                    {fifth? <div > <div className='service'>WEBSITE CONTENT WRITING</div></div>:<></>}
                    
                   
                    
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