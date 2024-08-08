import React, { useState } from 'react'
import './Footer.css'
import lkdn from '../../assets/lkdnlogo.png'
import ig from '../../assets/iglogo.png'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {

    const [callus, setcallus] = useState(false)

  return (
    <div className='Footer'>
        <div className='footerContent'>
            
            <div>
                <div className='footerHeading'>
                    <img 
                    src={logo} 
                    className='footerLogo'/>
                </div>
            </div>

            <div>
                <div className='footerHeading footerBold'>FOLLOW US</div>
                <div className='footerList'>
                    {/* <a href="" target='_blank'> */}
                        <div> 
                         LinkedIn
                        </div>
                    {/* </a> */}

                    {/* <a href="" target='_blank'> */}
                        <div>
                         Instagram
                        </div>
                    {/* </a> */}
                
                </div>
            </div>

            <div>
                <div className='footerHeading footerBold'>
                    LEGAL
                </div>
                <div className='footerList'>
                    <div>Privacy Policy</div>
                    <div>Terms & Conditions</div>
                </div>
            </div>

        </div>


        <div className='footerTerms'>
            <div>©2024 TechTonicMedia, All Rights Reserved.</div>

            <div className='footerSocialMedia'>
                <div><img src={lkdn}/></div>
                <div><img src={ig}/></div>
            </div>
        </div>

    </div>
  )
}

export default Footer