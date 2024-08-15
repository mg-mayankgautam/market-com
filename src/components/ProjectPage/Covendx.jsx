import React from 'react'
import './ProjectPage.css'
import p1 from '../../assets/covendx/02.jpg'
import p2 from '../../assets/covendx/04.jpg'
import p3 from '../../assets/covendx/06.jpg'
import p4 from '../../assets/covendx/08.jpg'
import p5 from '../../assets/covendx/09.jpg'
import p6 from '../../assets/covendx/10.jpg'
import logo1 from '../../assets/covendx/logo1.png'
import logo2 from '../../assets/covendx/logo2.png'
import logosecond from '../../assets/covendx/seconlogo.png'
import logoyellow from '../../assets/covendx/logoyellow.png'
import logogreen from '../../assets/covendx/logogreen.png'
import pallette from '../../assets/covendx/pallette.png'
import infographic from '../../assets/covendx/infographic.png'
import ui1 from '../../assets/covendx/ui1.jpg'
import ui2 from '../../assets/covendx/ui2.jpg'
import ui3 from '../../assets/covendx/ui3.jpg'
import ui4 from '../../assets/covendx/ui4.jpg'


const Covendx = () => {
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
                        Covendx is a vendor/staffing solutions company that provides a One-Stop platform simplifying the process of connecting with the right vendors. The company understands the critical importance of having the right personnel and is dedicated to managing all vendor needs while clients focus on driving their businesses forward.
                    </div>

                </div>


                <div className='proj_Section'>
                    <div className='section_divider'></div>

                    <div className='proj_MainHead'>
                        The Challenge
                    </div>
                    <div className='proj_text'>
                        When it comes to Corporate vendor procuremnt a very few prominent players stand tall. In such a category, it is essential to make position your brand as a trusted source of vendors.  Covendx came to us with the challenge of making a brand identity which helps them become a unique force in this space.
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
                            <img src={p1} />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={p2} />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={p3} />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={p4} />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={p5} />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={p6} />
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
                            <img src={logo1} alt="" />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={pallette} alt="" />
                        </div>
                        <div className='proj_fullImg'>
                            <img src={logo2} alt="" />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={logosecond} alt="" />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={logoyellow} alt="" />
                        </div>
                    </div>           

                </div>

                <div className='proj_Section'>
                    <div className='proj_SubHead'>
                        <div className='proj_numHead'>3</div>
                        <div>Info Graphics Design</div>
                    </div>   

                    <div className='companyInfoGr'>
                        <div className='proj_fullImg'>
                            <img src={infographic} alt="" />
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
                            <img src={ui1} />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={ui2} />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={ui3} />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={ui4} />
                        </div>

                    </div>

                </div>

                <div className='proj_Section'>
                    <div className='proj_SubHead'>
                        <div className='proj_numHead'>5</div>
                        <div>Website Developement</div>
                    </div>   

                    <div className='proj_text' style={{textAlign:'center'}}>
                        Ongoing...    
                    </div>                 

                </div>
            </div>
        </>
    )
}

export default Covendx