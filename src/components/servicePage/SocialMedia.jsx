




////

import React, { useEffect } from 'react'
import './socialmedia.css'
import logo from '../../assets/homeproj/logo.png'
import logocolors from '../../assets/homeproj/logocolors.png'
import pallette from '../../assets/homeproj/pallette.png'
import graphic1 from '../../assets/homeproj/graphic1.png'
import graphic2 from '../../assets/homeproj/graphic2.png'
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

                <img
                    src={
                        socialmediaimage
                    } loading='lazy' />

                <div className='proj_Section'>
                    <div className='proj_Head'>
                        Social media
                    </div>

                </div>

                <div className='proj_Section'>
                    <div className='proj_Head'>
                        "Elevate Your Brand with Tectonic Media's Social Media Expertise
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


            </div>
        </>
    )
}

export default SocialMedia