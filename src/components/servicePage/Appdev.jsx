import React, { useEffect } from 'react'
import './socialmedia.css'
import appdev from '../../assets/appdev/appdev.jpg'
import a1 from '../../assets/appdev/a1.png'
import a2 from '../../assets/appdev/a2.png'
import a3 from '../../assets/appdev/a3.png'
import a4 from '../../assets/appdev/a4.png'

const Appdev = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <>
            {/* <div className='dummyNav'>

            </div> */}
            <div className='proj_headerImg'>
                <img src={appdev} loading='lazy' />
            </div>

            <div className='ServicePage'>

                <div className='proj_Section'>
                    <div className='proj_LargeHead'>
                        App Development
                    </div>
                </div>

                <div className='proj_Section'>
                    <div className='proj_Head'>
                        "Transform Ideas into Powerful Mobile Experiences with Tectonic's App Development Expertise"
                    </div>
                    <div className='proj_text'>
                        In a world where mobile dominates, having a robust app is key to reaching your audience wherever they are. At Tectonic, we turn your vision into reality by building apps that are not only visually striking but also optimized for performance and user engagement.
                    </div>
                </div>

                <div className='proj_Section'>
                    <div className='section_divider'></div>

                    <div className='proj_MainHead'>
                        Our Approach to Building Exceptional Apps
                    </div>
                    <div className='proj_text'>
                        Crafting a successful app requires a blend of creativity and technical expertise. Our team focuses on understanding your business needs, user expectations, and market trends to deliver apps that stand out in a crowded marketplace. We prioritize user experience, ensuring that every interaction is intuitive and enjoyable.
                    </div>
                </div>

                <div className='proj_Section'>
                    <div className='proj_MainHead'>
                        Types of Apps We Develop
                    </div>

                    <div className='proj_text'>
                        <ul>
                            <li>Native Mobile Apps for iOS and Android</li>
                            <li>Cross-Platform Apps</li>
                            <li>Enterprise Solutions</li>
                            <li>eCommerce Apps</li>
                            <li>Social Networking Apps</li>
                            <li>On-Demand Service Apps</li>
                            <li>Custom Utility Apps</li>
                        </ul>
                    </div>
                </div>


                <div className='proj_Section'>
                    <div className='proj_MainHead'>
                        Our Work


                    </div>
                    <div className='companyMobile'>
                        <div className='proj_halfImg'>
                            <img src={a1} loading='lazy' />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={a2} loading='lazy' />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={a3} loading='lazy' />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={a4} loading='lazy' />
                        </div>
                    </div>


                </div>


            </div>
        </>
    )
}

export default Appdev