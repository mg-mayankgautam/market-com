import React, { useEffect } from 'react'
import './About.css'
import photo from '../../assets/bg2.jpg'
import { Link } from 'react-router-dom'

const About = ({ about_ref, scrollvar }) => {

    useEffect(() => {
        if (scrollvar > 15) {
            const cards = document.querySelectorAll('.aboutCardsHead')
            cards[0].classList.add('one');
            cards[1].classList.add('two');
            cards[2].classList.add('three');
            cards[3].classList.add('four');
        }
    }, [scrollvar])


    return (
        <div className='About' ref={about_ref}>

            <div className='AboutMain'>

                <div className='aboutImg'>
                    <img src={photo} alt="" loading='lazy' />
                </div>

                <div className='aboutBox1'>
                    <div className='aboutHead'>About Us</div>

                    <div className='aboutText'>
                        At TechTonic, we're dedicated to helping businesses succeed with innovative digital marketing strategies. Our experienced team delivers tailored solutions to enhance your online presence and achieve your goals. We leverage the latest technologies to stay ahead of the curve and ensure exceptional service and measurable results.
                    </div>

                    <Link to='/aboutus'>
                        <button className='aboutBtn'>
                            Learn More
                        </button>
                    </Link>
                </div>

                <div className='aboutBox2'>
                    <div className='aboutHead'>
                        Why Choose Us?
                    </div>
                    <div className='aboutChooseUstext'>
                        <div>
                            <strong>Expertise:</strong> Years of industry experience and proven success.
                        </div>
                        <div>
                            <strong>Innovation:</strong> Cutting-edge strategies and tools.
                        </div>
                        <div>
                            <strong>Personalized Service:</strong> Tailored solutions for your unique needs.
                        </div>
                        <div>
                            <strong>Results-Driven:</strong> Focus on delivering measurable results.
                        </div>
                        <div>
                            <strong>Customer-Centric:</strong> Your success is our top priority.
                        </div>
                    </div>
                </div>
            </div>

            <div className='AboutNumbers'>
                <div className='aboutCards'>
                    <div className='aboutCardsHead'></div>
                    <div className='aboutCardsText'>Years of Experience</div>
                </div>
                <div className='aboutCards'>
                    <div className='aboutCardsHead'></div>
                    <div className='aboutCardsText'>Happy Clients</div>
                </div>
                <div className='aboutCards'>
                    <div className='aboutCardsHead'></div>
                    <div className='aboutCardsText'>Projects Delivered</div>
                </div>
                <div className='aboutCards'>
                    <div className='aboutCardsHead'></div>
                    <div className='aboutCardsText'>Star Ratings</div>
                </div>
            </div>
        </div>
    )
}

export default About