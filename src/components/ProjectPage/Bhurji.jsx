import React, { useEffect } from 'react'
import './ProjectPage.css'

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
                    <div className='proj_Services'>
                        <div className='proj_service'>Branding</div>
                        <div className='proj_service'>UI/UX</div>
                        <div className='proj_service'>Company Profile</div>
                        <div className='proj_service'>Logo Design</div>
                        <div className='proj_service'>Website Development</div>
                        <div className='proj_service'>Business Assessment</div>
                        <div className='proj_service'>Brand Counselling</div>
                    </div>

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

                        {/* <div className='proj_halfImg'>
                            <img src={p1} />
                        </div> */}

                    </div>
                </div>

                <div className='proj_Section'>
                    <div className='proj_SubHead'>
                        <div className='proj_numHead'>2</div>
                        <div>Logo Design</div>
                    </div>

                    <div className='companyLogos'>

                    </div>

                </div>

                <div className='proj_Section'>
                    <div className='proj_SubHead'>
                        <div className='proj_numHead'>3</div>
                        <div>Info Graphics Design</div>
                    </div>

                    <div className='companyInfoGr'>

                    </div>

                </div>

                <div className='proj_Section'>
                    <div className='proj_SubHead'>
                        <div className='proj_numHead'>4</div>
                        <div>Website UI Design</div>
                    </div>

                    <div className='companyUI'>

                    </div>

                </div>

                <div className='proj_Section'>
                    <div className='proj_SubHead'>
                        <div className='proj_numHead'>5</div>
                        <div>Website Developement</div>
                    </div>

                    <div className='proj_text'>
                        Ongoing...
                    </div>

                </div>
            </div>
        </>
    )
}

export default Bhurji