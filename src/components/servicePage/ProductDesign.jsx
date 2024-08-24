import React, { useEffect } from 'react'
import './socialmedia.css'
import pdimage from '../../assets/productdesign/p.png'
import p1 from '../../assets/productdesign/p1.png'
import p2 from '../../assets/productdesign/p2.png'
import p3 from '../../assets/productdesign/p3.png'
import p4 from '../../assets/productdesign/p4.png'
import p6 from '../../assets/homeproj/card1.png'
import p5 from '../../assets/businesscard.png'


const ProductDesign = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <>
            {/* <div className='dummyNav'>

            </div> */}

            <div className='proj_headerImg'>
                <img src={pdimage} loading='lazy' />
            </div>

            <div className='ServicePage'>

                <div className='proj_Section'>
                    <div className='proj_LargeHead'>
                        Product Design
                    </div>
                </div>

                <div className='proj_Section'>
                    <div className='proj_Head'>
                        "Innovate and Inspire with Tectonic's Product Design Solutions"
                    </div>
                    <div className='proj_text'>
                        At Tectonic, we understand that great products start with great design. Our product design services are tailored to bring your ideas to life, ensuring that every detail is crafted with precision, from concept to launch.
                    </div>
                </div>

                <div className='proj_Section'>
                    <div className='section_divider'></div>

                    <div className='proj_MainHead'>
                        Let Tectonic Shape Your Product's Future
                    </div>
                    <div className='proj_text'>
                        Navigating the complexities of product design can be challenging. Our team of experts will work closely with you to create designs that are not only aesthetically pleasing but also functional and user-centric, driving both innovation and market success.
                    </div>
                </div>

                <div className='proj_Section'>
                    <div className='proj_MainHead'>
                        Here's How We Do It
                    </div>

                    <div className='proj_text'>
                        <ul>
                            <li>Conduct in-depth market research.</li>
                            <li>Define user personas and journeys.</li>
                            <li>Develop wireframes and prototypes.</li>
                            <li>Design with a focus on usability and aesthetics.</li>
                            <li>Iterate based on user feedback and testing.</li>
                            <li>Collaborate closely with your development team.</li>
                            <li>Ensure a smooth transition from design to production.</li>
                        </ul>
                    </div>
                </div>


                <div className='proj_Section'>
                    <div className='proj_MainHead'>
                        Our Work
                    </div>

                    <div className='companyProfile'>
                        <div className='proj_halfImg'>
                            <img src={p1} loading='lazy' />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={p2} loading='lazy' />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={p3} loading='lazy' />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={p4} loading='lazy' />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={p5} loading='lazy' />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={p6} loading='lazy' />
                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}

export default ProductDesign