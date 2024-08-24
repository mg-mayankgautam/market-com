import React, { useEffect } from 'react'
import './socialmedia.css'
import s1 from '../../assets/aadmiwala/ui1.png'
import s2 from '../../assets/aadmiwala/ui2.png'
import s3 from '../../assets/aadmiwala/ui3.png'
import s4 from '../../assets/aadmiwala/ui4.png'
import s5 from '../../assets/moheera/ui1.png'
import s6 from '../../assets/moheera/ui3.png'
import s7 from '../../assets/moheera/ui4.png'
import s8 from '../../assets/moheera/ui5.png'
import s9 from '../../assets/covendx/ui1.jpg'
import s10 from '../../assets/covendx/ui2.jpg'
import s11 from '../../assets/covendx/ui3.jpg'
import s12 from '../../assets/covendx/ui4.jpg'
import ui1 from '../../assets/bhurji/ui1.png'
import ui4 from '../../assets/bhurji/ui4.png'
import ui5 from '../../assets/bhurji/ui5.png'
import ui6 from '../../assets/bhurji/ui6.png'
import cms from '../../assets/websiteDev/cms.png'
import cms1 from '../../assets/websiteDev/cms1.png'
import cms2 from '../../assets/websiteDev/cm2.png'
import cms3 from '../../assets/websiteDev/cms3.png'

import webdev from '../../assets/websiteDev/webdev.jpg'


const Webdev = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <>
            {/* <div className='dummyNav'>

            </div> */}
            <div className='proj_headerImg'>
                <img src={webdev} loading='lazy' />
            </div>

            <div className='ServicePage'>

                <div className='proj_Section'>
                    <div className='proj_LargeHead'>
                        Website Development
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
                            <img src={s1} loading='lazy' />
                        </div>
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
                            <img src={s5} loading='lazy' />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={s6} loading='lazy' />
                        </div>

                        <div className='proj_halfImg'>
                            <img src={s7} loading='lazy' />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={s8} loading='lazy' />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={s9} loading='lazy' />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={s10} loading='lazy' />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={s11} loading='lazy' />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={s12} loading='lazy' />
                        </div>

                        <div className='proj_halfImg'>
                            <img src={ui1} loading='lazy'/>
                        </div>
                        {/* <div className='proj_halfImg'>
                            <img src={ui2} loading='lazy'/>
                        </div>
                        <div className='proj_halfImg'>
                            <img src={ui3} loading='lazy'/>
                        </div> */}
                        <div className='proj_halfImg'>
                            <img src={ui4} loading='lazy'/>
                        </div>
                        <div className='proj_halfImg'>
                            <img src={ui5} loading='lazy'/>
                        </div>
                        <div className='proj_halfImg'>
                            <img src={ui6} loading='lazy'/>
                        </div>

                    </div>


                </div>


                <div className='proj_Section'>
                    <div className='proj_MainHead'>
                        Content Management System
                    </div>
                    <div className='companyProfile'>

                        <div className='proj_halfImg'>
                            <img src={cms} loading='lazy' />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={cms1} loading='lazy' />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={cms2} loading='lazy' />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={cms3} loading='lazy' />
                        </div>

                    </div>


                </div>


            </div>
        </>
    )
}

export default Webdev;