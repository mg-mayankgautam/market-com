import React, { useEffect } from 'react'
import './ProjectPage.css'
import logo from '../../assets/homeproj/logo.png'
import logocolors from '../../assets/homeproj/logocolors.png'
import pallette from '../../assets/homeproj/pallette.png'
import graphic1 from '../../assets/homeproj/graphic1.png'
import graphic2 from '../../assets/homeproj/graphic2.png'
import letterhead from '../../assets/homeproj/letterhead.png'
import card1 from '../../assets/homeproj/card1.png'
import card2 from '../../assets/homeproj/card2.png'


const Homeproject = () => {
  
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

                    {/* <div className='proj_SubHead'>
                        <div className='proj_numHead'>1</div>
                        <div>Company Profile</div>
                    </div>

                    <div className='companyProfile'>

                         <div className='proj_halfImg'>
                            <img src={p1} />
                        </div>

                    </div> */}
                </div>

                <div className='proj_Section'>
                    <div className='proj_SubHead'>
                        <div className='proj_numHead'>1</div>
                        <div>Logo Design</div>
                    </div>

                    <div className='companyLogos'>
                        <div className='proj_fullImg'>
                            <img src={logo} loading='lazy'/>
                        </div>
                        <div className='proj_halfImg'>
                            <img src={pallette} loading='lazy'/>
                        </div>
                        <div className='proj_halfImg'>
                            <img src={logocolors} loading='lazy'/>
                        </div>
                    </div>

                </div>

                <div className='proj_Section'>
                    <div className='proj_SubHead'>
                        <div className='proj_numHead'>2</div>
                        <div>Graphic Design</div>
                    </div>

                    <div className='companyLogos'>
                        <div className='proj_halfImg'>
                            <img src={graphic1} loading='lazy'/>
                        </div>
                        <div className='proj_halfImg'>
                            <img src={graphic2} loading='lazy'/>
                        </div>
                    </div>

                </div>

                <div className='proj_Section'>
                    <div className='proj_SubHead'>
                        <div className='proj_numHead'>3</div>
                        <div>Letterhead Design</div>
                    </div>

                    <div className='companyInfoGr'>
                        <div className='proj_fullImg' style={{width:'70%'}}>
                            <img src={letterhead} loading='lazy'/>
                        </div>
                    </div>

                </div>

                <div className='proj_Section'>
                    <div className='proj_SubHead'>
                        <div className='proj_numHead'>4</div>
                        <div>Business Card Design</div>
                    </div>

                    <div className='companyUI'>
                        <div className='proj_halfImg'>
                            <img src={card1} loading='lazy'/>
                        </div>
                        <div className='proj_halfImg'>
                            <img src={card2} loading='lazy'/>
                        </div>
                    </div>

                </div>

                <div className='proj_Section'>
                    <div className='proj_SubHead'>
                        <div className='proj_numHead'>5</div>
                        <div>Website Development</div>
                    </div>

                    <div className='proj_text ongoing' style={{ color:'#bf3430'}}>
                        Under Progress
                    </div>

                </div>
            </div>
        </>
    )
}

export default Homeproject