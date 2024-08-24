import React, { useEffect } from 'react'
import infographic1 from '../../assets/aadmiwala/infographic1.png'
import infographic2 from '../../assets/aadmiwala/infographic2.png'
import logo from '../../assets/aadmiwala/logo.png'
import ui1 from '../../assets/aadmiwala/ui1.png'
import ui2 from '../../assets/aadmiwala/ui2.png'
import ui3 from '../../assets/aadmiwala/ui3.png'
import ui4 from '../../assets/aadmiwala/ui4.png'
import './ProjectPage.css'


const Aadmiwala = () => {

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
                    </ul>

                </div>

                <div className='proj_Section'>
                    <div className='proj_Head'>
                        About The Brand
                    </div>
                    <div className='proj_text'>

                    </div>

                </div>


                <div className='proj_Section'>
                    <div className='section_divider'></div>

                    <div className='proj_MainHead'>
                        The Challenge
                    </div>
                    <div className='proj_text'>

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

                    <div className='companyProfile'>

                    </div>
                </div>

                <div className='proj_Section'>
                    <div className='proj_SubHead'>
                        <div className='proj_numHead'>2</div>
                        <div>Logo Design</div>
                    </div>

                    <div className='companyInfoGr'>
                        <div className='proj_fullImg'>
                            <img src={logo} loading='lazy' />
                        </div>
                    </div>

                </div>

                <div className='proj_Section'>
                    <div className='proj_SubHead'>
                        <div className='proj_numHead'>3</div>
                        <div>Info Graphics Design</div>
                    </div>

                    <div className='companyProfile'>
                        <div className='proj_halfImg'>
                            <img src={infographic1} loading='lazy' />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={infographic2} loading='lazy' />
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
                    </div>

                </div>

                <div className='proj_Section'>
                    <div className='proj_SubHead'>
                        <div className='proj_numHead'>5</div>
                        <div>Website Development</div>
                    </div>

                    <div className='proj_text ongoing' style={{ color: '#bf3430' }}>
                        Under Progress
                    </div>

                </div>
            </div>
        </>
    )
}

export default Aadmiwala