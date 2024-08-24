import React, { useEffect } from 'react'
import './AboutPage.css'
import '../ProjectPage/ProjectPage.css'
import seo from '../../assets/bg2.jpg'

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <>
      {/* <div className='dummyNav'>

      </div> */}

      <div className='proj_headerImg'>
        <img src={seo} loading='lazy' />
      </div>


      <div className='AboutPage'>

        <div className='proj_Section'>
          <div className='about_LargeHead'>
            Welcome to TechTonic Media - We craft digital experiences that move your customers.
          </div>
        </div>


        <div className='proj_Section'>
          <div className='proj_Head'>
            Since our inception, TechTonic Media has been at the forefront of digital innovation, helping brands and businesses navigate the ever-evolving digital landscape. Founded on the principles of creativity, technology, and a deep understanding of market dynamics, we have consistently delivered exceptional digital marketing solutions that empower businesses to reach new heights.
          </div>
          <div className='proj_text'>
            TechTonic Media is more than just a digital marketing agency; we're your strategic partner in navigating the digital landscape. Our team comprises creative thinkers, tech enthusiasts, and marketing experts who are passionate about driving growth for your business. We believe in crafting personalized, innovative strategies that resonate with your audience and propel your brand forward.
          </div>
        </div>

        <div className='proj_Section'>
          {/* <div className='section_divider'></div> */}
          <div className='proj_Head'>
            Our Journey
          </div>
          <div className='proj_text'>
            From humble beginnings, TechTonic Media has grown into a trusted partner for businesses across various industries. Our success is rooted in our commitment to quality over quantity, focusing on delivering results that matter. We’ve earned our reputation by consistently pushing the boundaries of what’s possible, creating impactful digital experiences that resonate with audiences and drive business growth.
          </div>
        </div>

        <div className='proj_Section'>
          <div className='proj_Head'>
            Our Expertise
          </div>
          <div className='proj_text'>
            As a full-service digital marketing agency, TechTonic Media offers a comprehensive suite of services designed to elevate your brand and drive measurable results. Whether you need a cutting-edge website, a powerful SEO strategy, or engaging social media campaigns, we have the expertise to deliver.
          </div>
        </div>

        <div className='proj_Section'>
          <div className='section_divider'></div>
          <div className='proj_MainHead'>
            Our Services
          </div>
          <div className='proj_text'>
            <ul>
              <li><strong>Website Development:</strong> We build websites that are not only visually appealing but also functional and user-friendly. From custom websites to e-commerce platforms, we ensure your online presence stands out.</li>
              <li><strong>App Development:</strong> Our team crafts intuitive and engaging mobile and web applications tailored to your business needs, enhancing user experiences and driving growth.</li>
              <li><strong>Product Design:</strong> We create innovative and user-centered designs that effectively communicate your brand’s value, ensuring a seamless experience for your target audience.</li>
              <li><strong>Social Media Marketing:</strong> We manage and optimize your social media presence, developing strategies that foster engagement and build brand loyalty across various platforms.</li>
              <li><strong>Search Engine Optimization (SEO):</strong> Our SEO strategies are designed to increase your online visibility and drive organic traffic to your website. We’ve successfully ranked numerous clients on the first page of Google for competitive keywords, and we’re ready to do the same for you.</li>
              <li><strong>Corporate Strategy:</strong> We develop and execute strategies that align with your business goals, integrating various digital marketing disciplines to maximize effectiveness and drive long-term success.</li>
            </ul>
          </div>
        </div>

        <div className='proj_Section'>
          <div className='proj_MainHead'>
            Why Choose Us?
          </div>
          <div className='proj_text'>
            <ul>
              <li><strong>Innovation:</strong> We stay ahead of the curve by constantly exploring new tools, techniques, and trends, ensuring that our clients benefit from the latest advancements in digital marketing.</li>
              <li><strong>Expertise:</strong> Our team is made up of seasoned professionals with extensive experience in digital marketing, design, and technology.</li>
              <li><strong>Client-Centric Approach:</strong> Your success is our priority. We take the time to understand your unique needs and challenges, crafting solutions that truly make a difference.</li>
              <li><strong>Transparency:</strong> We believe in open communication and provide our clients with regular updates and detailed reports on the progress of their campaigns.</li>
            </ul>
          </div>
        </div>

        <div className='proj_Section'>
          <div className='proj_MainHead'>
            Get in Touch
          </div>
          <div className='proj_text'>
            Ready to make your mark in the digital world? Contact us today to discover how TechTonic Media can help you achieve your business goals.
          </div>
        </div>


      </div>
    </>
  )
}

export default AboutPage