import React, { useEffect } from 'react'
import './socialmedia.css'
import s5 from '../../assets/socialmedia/s5.png'
import s6 from '../../assets/socialmedia/s6.png'
import s2 from '../../assets/socialmedia/s2.png'
import s3 from '../../assets/socialmedia/s3.png'
import s4 from '../../assets/socialmedia/s4.png'
import s1 from '../../assets/socialmedia/s1.png'
import socialmediaimage from '../../assets/socialmedia/socialmediaimage.jpg'


const SocialMedia = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <>
            <div className='dummyNav'>

            </div>
            <div className='ProjectPage'>

                <div className='proj_headerImg'>
                    <img src={socialmediaimage} loading='lazy' />
                </div>

                <div className='proj_Section'>
                    <div className='proj_Head'>
                        Social media
                    </div>

                </div>

                <div className='proj_Section'>
                    <div className='proj_Head'>
                        "Elevate Your Brand with Tectonic Media's Social Media Expertise"
                    </div>
                    <div className='proj_text'>
                        Whether you're a small business or a large enterprise, social media is a powerful tool to connect with your audience, build brand awareness, and drive sales. With over three billion people using social media worldwide, the potential for reach and engagement is immense.
                    </div>

                </div>


                <div className='proj_Section'>
                    <div className='section_divider'></div>

                    <div className='proj_MainHead'>
                        Let Tectonic Media Craft Your Social Media Strategy


                    </div>
                    <div className='proj_text'>
                        Feeling overwhelmed by the complexities of social media? Our team is here to guide you every step of the way. From selecting the right platforms to developing compelling content, we'll help you create a strategy that delivers results.
                    </div>

                </div>

                <div className='proj_Section'>
                    <div className='proj_MainHead'>
                        So heres what we do


                    </div>

                    <div className='proj_SubHead'>
                        <div className='proj_numHead'>1</div>
                        <div>Set clear goals.
                            <br />
                            Understand your audience. <br />
                            Establish key performance indicators (KPIs). <br />
                            Analyze your competition. <br />
                            Create high-quality content. <br />
                            Prioritize timely posting. <br />
                            Measure and optimize. <br />
                            Foster team collaboration.</div>
                    </div>




                </div>

                <div className='proj_Section'>
                    <div className='proj_MainHead'>
                        Our Work


                    </div>
                    <div className='companyProfile'>
                        
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
                            <img src={s1} loading='lazy' />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={s6} loading='lazy' />
                        </div>
                        <div className='proj_halfImg'>
                            <img src={s5} loading='lazy' />
                        </div>
                        
                    </div>


                </div>


            </div>
        </>
    )
}

export default SocialMedia