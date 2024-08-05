import React from 'react'
import './About.css'
import photo from '../../assets/bg2.jpg'

const About = () => {
  return (
    <div className='About'>
        
        <div className='AboutMain'>

            <div className='aboutImg'>
                <img src={photo} alt="" />
            </div>

            <div className='aboutBox1'>
                <div className='aboutHead'>About Us</div>

                <div className='aboutText'>
                    At Your Company Name, we're dedicated to helping businesses succeed with innovative digital marketing strategies. Our experienced team delivers tailored solutions to enhance your online presence and achieve your goals. We believe in the power of digital transformation and leverage the latest technologies and methodologies to stay ahead of the curve. 
                    {/* Our commitment to excellence and customer satisfaction drives everything we do, ensuring that we deliver the highest quality service and measurable results. Whether you're looking to boost your brand's visibility, engage your audience, or increase your ROI, we're here to help you every step of the way. */}
                </div>

                <button className='aboutBtn'>
                    Learn More
                </button>
            </div>

            <div className='aboutBox2'>
                <div className='aboutHead'>
                    Why Choose Us?
                </div>
                <div>
                    Expertise: Years of industry experience and proven success.
                    Innovation: Cutting-edge strategies and tools.
                    Personalized Service: Tailored solutions for your unique needs.
                    Results-Driven: Focus on delivering measurable results.
                    Customer-Centric: Your success is our top priority.
                </div>
            </div>
        </div>

        <div className='AboutNumbers'>
            numbers
        </div>
    </div>
  )
}

export default About