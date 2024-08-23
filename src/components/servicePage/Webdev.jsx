import React, { useEffect } from 'react'
import './socialmedia.css'
import s5 from '../../assets/socialmedia/s5.png'
import s6 from '../../assets/socialmedia/s6.png'
import s2 from '../../assets/socialmedia/s2.png'
import s3 from '../../assets/socialmedia/s3.png'
import s4 from '../../assets/socialmedia/s4.png'
import s1 from '../../assets/socialmedia/s1.png'
import webdev from '../../assets/websiteDev/webdev.jpg'


const Webdev = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <>
            <div className='dummyNav'>

            </div>
            <div className='ProjectPage'>

                <div className='proj_headerImg'>
                    <img src={webdev} loading='lazy' />
                </div>

                <div className='proj_Section'>
                    <div className='proj_LargeHead'>
                        Website Developemnt
                    </div>

                </div>

                <div className='proj_Section'>
                    <div className='proj_Head'>
                    Let Techtonic Media help you build a website that makes a lasting impression and propels your business forward.
                    </div>
                    <div className='proj_text'>
                    Your website is the cornerstone of your online success, serving as the digital hub that attracts and engages customers. To effectively represent your brand and offerings, your website should be clear, compelling, and user-friendly.
                    </div>

                </div>


                <div className='proj_Section'>
                    <div className='section_divider'></div>

                    <div className='proj_MainHead'>
                        How Tectonic Media helps you realising your perfect website?


                    </div>
                    <div className='proj_text'>
                    At Techtonic Media, we specialize in crafting exceptional websites that not only showcase your brand identity but also drive meaningful customer interactions and conversions. Our team of skilled designers and developers excels in creating visually stunning, intuitive, and responsive websites that deliver a seamless experience across all devices.
                    </div>

                </div>

                <div className='proj_Section'>
                    <div className='proj_MainHead'>
                      Types of Websites we make


                    </div>

                    <div className='proj_text'>
                        {/* <div className='proj_numHead'>1</div> */}
                        <ul>
                            <li>Service based websites</li>
                            <li>Ecommerce websites</li>
                            <li>Single Category Storefronts</li>
                            <li>Blog Website with/without CMS</li>
                            <li>Shopify Ecommerce</li>
                            <li>Wordpress Catalogue</li>
                            <li>Portfolio Websites</li>
                            <li>Enterprice Solutions</li>
                        </ul>
                    </div>




                </div>

                <div className='proj_Section'>
                    <div className='proj_MainHead'>
                        Our Work


                    </div>
                    <div className='companyProfile'>
                        
                        <div className='proj_halfImg'>
                            <img src={s2} loading='lazy' />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={s3} loading='lazy' />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={s4} loading='lazy' />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={s1} loading='lazy' />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={s6} loading='lazy' />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={s5} loading='lazy' />
                        </div>
                        
                    </div>


                </div>


            </div>
        </>
    )
}

export default Webdev;