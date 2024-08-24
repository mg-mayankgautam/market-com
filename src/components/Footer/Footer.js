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
                            className='footerLogo' />
                    </div>
                </div>

                <div>
                    <div className='footerHeading footerBold'>CONTACT US</div>
                    <div className='footerList'>
                        <a href="mailto:contact@techtonicmedia.in" target='_blank'>
                            <div>contact@techtonicmedia.in</div>
                        </a>

                        <a href="tel:+919990699649">
                            <div>+91 9990699649</div>
                        </a>
                        <a href="https://wa.me/919990699649" target='_blank'>
                            <div>Whatsapp</div>
                        </a>
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

            </div >


            <div className='footerTerms'>
                <div>©2024 TechTonicMedia, All Rights Reserved.</div>

                <div className='footerSocialMedia'>
                    <div><img src={lkdn} /></div>
                    <div><img src={ig} /></div>
                </div>
            </div>

        </div >
    )
}

export default Footer