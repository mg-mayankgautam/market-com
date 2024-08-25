import React, { useEffect } from 'react'
import './ProjectPage.css'
import logo from '../../assets/bhurji/logo.png'
import logo1 from '../../assets/bhurji/logo1.png'
import profile1 from '../../assets/bhurji/profile1.jpg'
import profile2 from '../../assets/bhurji/profile2.jpg'
import profile3 from '../../assets/bhurji/profile3.jpg'
import profile4 from '../../assets/bhurji/profile4.jpg'
import profile5 from '../../assets/bhurji/profile5.jpg'
import profile6 from '../../assets/bhurji/profile6.jpg'
import social1 from '../../assets/bhurji/social1.png'
import social2 from '../../assets/bhurji/social2.png'
import ui1 from '../../assets/bhurji/ui1.png'
import ui2 from '../../assets/bhurji/ui2.png'
import ui3 from '../../assets/bhurji/ui3.png'
import ui4 from '../../assets/bhurji/ui4.png'
import ui5 from '../../assets/bhurji/ui5.png'
import ui6 from '../../assets/bhurji/ui6.png'

const Bhurji = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <>
            <div className='dummyNav'>

            </div>
            <div className='ProjectPage'>

                <div className='proj_Section'>
                    <div className='proj_Head'>
                        Services
                    </div>
                    <ul className='proj_Services'>
                        <li className='proj_service'>Branding</li>
                        <li className='proj_service'>UI/UX</li>
                        <li className='proj_service'>Company Profile</li>
                        <li className='proj_service'>Logo Design</li>
                        <li className='proj_service'>Website Development</li>
                        <li className='proj_service'>Business Assessment</li>
                        <li className='proj_service'>Brand Counselling</li>
                        <li classNamze='proj_service'>Social Media Post Design</li>
                    </ul>

                </div>

                <div className='proj_Section'>
                    <div className='proj_Head'>
                        About The Brand
                    </div>
                    <div className='proj_text'>
                        Bhurji Electronics, established in 1972, is a leading transformer manufacturer in India. Initially holding a 75% market share in TV transformers, the company now develops advanced products to meet national energy needs. Pioneering C-Core Transformers, Bhurji Electronics has supplied constant voltage transformers to organizations like The Indian Railways, Ministry of Finance, Income Tax Department, HCL, WIPRO, and SIEMENS. Their Gurugram facility supports comprehensive manufacturing, including lamination cutting, punching, and developing transformer components for internal use.
                    </div>

                </div>


                <div className='proj_Section'>
                    <div className='section_divider'></div>

                    <div className='proj_MainHead'>
                        The Challenge
                    </div>
                    <div className='proj_text'>
                        Bhurji Electronics, with its long-standing reputation and extensive market share, needed a digital transformation to reflect its legacy while attracting a new generation of clients. The challenge was to modernize their brand image without losing the trust and recognition built over decades. This required us to craft a strategy that integrated their pioneering spirit in transformer manufacturing with a contemporary digital presence, ensuring they remained at the forefront of the industry.
                    </div>

                </div>

                <div className='proj_Section'>
                    <div className='proj_MainHead'>
                        Our Work
                    </div>

                    <div className='proj_SubHead'>
                        <div className='proj_numHead'>1</div>
                        <div>Company Profile</div>
                    </div>

                    <div className='companyCatalogue'>

                        <div className='proj_halfImg'>
                            <img src={profile1} loading='lazy' />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={profile2} loading='lazy' />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={profile3} loading='lazy' />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={profile4} loading='lazy' />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={profile5} loading='lazy' />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={profile6} loading='lazy' />
                        </div>

                    </div>
                </div>

                <div className='proj_Section'>
                    <div className='proj_SubHead'>
                        <div className='proj_numHead'>2</div>
                        <div>Logo Design</div>
                    </div>

                    <div className='companyLogos'>
                        <div className='proj_halfImg'>
                            <img src={logo} loading='lazy' />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={logo1} loading='lazy' />
                        </div>
                    </div>

                </div>

                <div className='proj_Section'>
                    <div className='proj_SubHead'>
                        <div className='proj_numHead'>3</div>
                        <div>Social Media Post Design</div>
                    </div>

                    <div className='companyProfile'>
                        <div className='proj_halfImg'>
                            <img src={social1} loading='lazy' />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={social2} loading='lazy' />
                        </div>
                    </div>

                </div>

                <div className='proj_Section'>
                    <div className='proj_SubHead'>
                        <div className='proj_numHead'>4</div>
                        <div>Website UI Design</div>
                    </div>

                    <div className='companyUI'>
                        <div className='proj_halfImg'>
                            <img src={ui1} loading='lazy' />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={ui2} loading='lazy' />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={ui3} loading='lazy' />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={ui4} loading='lazy' />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={ui5} loading='lazy' />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={ui6} loading='lazy' />
                        </div>
                    </div>

                </div>

                <div className='proj_Section'>
                    <div className='proj_SubHead'>
                        <div className='proj_numHead'>5</div>
                        <div>Website Development</div>
                    </div>

                    <div className='proj_text ongoing' style={{ color: '#0265b2' }}>
                        Under Progress
                    </div>

                </div>
            </div>
        </>
    )
}

export default Bhurji