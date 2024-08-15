import React, { useEffect } from 'react'
import imagery1 from '../../assets/moheera/imagery1.png'
import imagery2 from '../../assets/moheera/imagery2.png'
import logo1 from '../../assets/moheera/logo.png'
// import logo2 from '../../assets/moheera/logo2.png'
import logocolors from '../../assets/moheera/logocolors.png'
import typo from '../../assets/moheera/typo.png'
import pallette from '../../assets/moheera/pallette.png'
import ui1 from '../../assets/moheera/ui1.png'
// import ui2 from '../../assets/moheera/ui2.png'
import ui3 from '../../assets/moheera/ui3.png'
import ui4 from '../../assets/moheera/ui4.png'
import ui5 from '../../assets/moheera/ui5.png'

const Moheera = () => {

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
                        Moheera is a jewellery brand specializing in lab-grown diamonds. It offers customers meticulously crafted jewellery, designed with attention to detail. Moheera emphasizes versatile designs, ranging from statement pieces to jewellery suitable for everyday wear.
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

                        <div className='proj_halfImg'>
                            <img src={imagery1} loading='lazy'/>
                        </div>
                        <div className='proj_halfImg'>
                            <img src={imagery2} loading='lazy'/>
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
                            <img src={logo1} loading='lazy'/>
                        </div>
                        <div className='proj_halfImg'>
                            <img src={pallette} loading='lazy'/>
                        </div>
                        <div className='proj_fullImg'>
                            <img src={logocolors} loading='lazy'/>
                        </div>
                    </div>

                </div>

                <div className='proj_Section'>
                    <div className='proj_SubHead'>
                        <div className='proj_numHead'>3</div>
                        <div>Typography</div>
                    </div>

                    <div className='companyInfoGr'>
                        <div className='proj_fullImg'>
                            <img src={typo} loading='lazy'/>
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
                            <img src={ui1} loading='lazy'/>
                        </div>
                        {/* <div className='proj_halfImg'>
                            <img src={ui2} loading='lazy'/>
                        </div> */}
                        <div className='proj_halfImg'>
                            <img src={ui5} loading='lazy'/>
                        </div>
                        <div className='proj_halfImg'>
                            <img src={ui3} loading='lazy'/>
                        </div>
                        <div className='proj_halfImg'>
                            <img src={ui4} loading='lazy'/>
                        </div>
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

export default Moheera