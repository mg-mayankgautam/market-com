import React, { useState, useEffect } from 'react'
import './Contact.css'
import location from '../../assets/locationlogo.png'
import mail from '../../assets/maillogo.png'
import emailjs from '@emailjs/browser';
import call from '../../assets/calllogo.png'


const Contact = ({contact_ref}) => {

    useEffect(() => emailjs.init("tBVWuXxbt-lDrhJLU"), []);

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [msg, setMsg] = useState('')
  
    const sendEmail = async(e) => {
        console.log(name, email, phone, msg)

        try{
            await emailjs.send('service_nom56r7', 'template_7nv92cr', {
                name: name,
                email: email,
                phone: phone,
                msg: msg
            });
            alert("email successfully sent to admin");
        } 
        catch (error) {
            console.log(error);
        }

    }


  return (

    <div className='Contact' ref={contact_ref}>
        
        <div className='ContactMainBox'>
            <div className='SendMsgBox'>
                
                <div className='sendMsgHead'>
                    Reach out for a new project 
                    <br />or just say hello
                </div>

                <input className='contact_input' type="text" onChange={(e)=> setName(e.target.value)} placeholder='your name'/>
                <input type="text" onChange={(e)=> setEmail(e.target.value)} placeholder='your email'/>
                <input type="number" onChange={(e)=> setPhone(e.target.value)} placeholder='your phone'/>
                <input type="text" onChange={(e)=> setMsg(e.target.value)} placeholder='enter your message'/>

                <button className='contactBtn' onClick={sendEmail}>SEND</button>
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