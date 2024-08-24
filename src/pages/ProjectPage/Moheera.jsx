import './ProjectPage.css'
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
import lookbook from '../../assets/moheera/lookbook.png'
import lookbook0 from '../../assets/moheera/lookbook0.png'
import lookbook1 from '../../assets/moheera/lookbook1.png'
import lookbook2 from '../../assets/moheera/lookbook2.png'
import lookbook3 from '../../assets/moheera/lookbook3.png'
import lookbook4 from '../../assets/moheera/lookbook4.png'

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
                        Moheera is a jewellery brand specializing in lab-grown diamonds. It offers its customers meticulously crafted jewellery, designed with attention to detail. Moheera emphasizes versatile designs, ranging from statement pieces to jewellery suitable for everyday wear.
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
                        <div>Product Photography</div>
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
                        <div>Catalogue Design</div>
                    </div>

                    <div className='companyCatalogue'>
                        <div className='proj_halfImg'>
                            <img src={lookbook} loading='lazy'/>
                        </div>
                        <div className='proj_halfImg'>
                            <img src={lookbook0} loading='lazy'/>
                        </div>
                        <div className='proj_halfImg'>
                            <img src={lookbook1} loading='lazy'/>
                        </div>
                        <div className='proj_halfImg'>
                            <img src={lookbook2} loading='lazy'/>
                        </div>
                        <div className='proj_halfImg'>
                            <img src={lookbook3} loading='lazy'/>
                        </div>
                        <div className='proj_halfImg'>
                            <img src={lookbook4} loading='lazy'/>
                        </div>
                    </div>

                </div>

                <div className='proj_Section'>
                    <div className='proj_SubHead'>
                        <div className='proj_numHead'>3</div>
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
                        <div className='proj_numHead'>4</div>
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
                        <div className='proj_numHead'>5</div>
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
                        <div className='proj_numHead'>6</div>
                        <div>Website Development</div>
                    </div>

                    <div className='proj_text ongoing' style={{ color:'#7c2447'}}>
                        Under Progress
                    </div>

                </div>
            </div>
        </>
    )
}

export default Moheera