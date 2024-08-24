import React, { useEffect } from 'react'
import '../ProjectPage/ProjectPage.css'
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
            {/* <div className='dummyNav'>

            </div> */}

            <div className='proj_headerImg'>
                <img src={socialmediaimage} loading='lazy' />
            </div>

            <div className='ServicePage'>

                <div className='proj_Section'>
                    <div className='proj_LargeHead'>
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
                        So here's what we do


                    </div>

                    <div className='proj_text'>
                        {/* <div className='proj_numHead'>1</div> */}
                        <ul>
                            <li>Set clear goals.</li>
                            <li>Understand your audience.</li>
                            <li>Establish key performance indicators (KPIs).</li>
                            <li>Analyze your competition.</li>
                            <li>Create high-quality content.</li>
                            <li>Prioritize timely posting.</li>
                            <li>Measure and optimize.</li>
                            <li>Foster team collaboration.</li>
                        </ul>
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