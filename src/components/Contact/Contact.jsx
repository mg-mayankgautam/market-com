import React from 'react'
import './Contact.css'
import location from '../../assets/locationlogo.png'
import mail from '../../assets/maillogo.png'
import call from '../../assets/calllogo.png'


const Contact = ({contact_ref}) => {
  return (

    <div className='Contact' ref={contact_ref}>
        
        <div className='ContactMainBox'>
            <div className='SendMsgBox'>
                
                <div className='sendMsgHead'>
                    Reach out for a new project 
                    <br />or just say hello
                </div>

                <input type="text" placeholder='your name'/>
                <input type="text" placeholder='your email'/>
                <input type="text" placeholder='enter your message'/>

                <button className='contactBtn'>SEND</button>
            </div> 
        </div>

        <div className='ContactSubBox'>
            <div>
                <div className='sendMsgHead'>
                    Get In Touch
                </div>

                <div className='sendMsgContent'>
                    <a><div className='contactInfoIcons'>
                        <img src={location} className='icon' /> 
                        <div>Signature Global Millennia 1, <br />Gurugram, Haryana</div>
                    </div></a>

                    <a href="mailto:contact@techtonicmedia.in" target='_blank'> 
                        <div className='contactInfoIcons'>
                            <img src={mail} className='icon'/> 
                            <div>contact@techtonicmedia.in</div>
                        </div>
                    </a>

                    <a href="tel:+919990699649">
                        <div className='contactInfoIcons'>
                            <img src={call} className='icon'/> 
                            <div>9990699649</div>
                        </div>
                    </a>
                    {/*<a href="https://wa.me/919100981008" target='_blank'> */}
                </div>
            </div>
        </div>

    </div>
  )
}

export default Contact

{/* <div>
            
        </div>

        */}