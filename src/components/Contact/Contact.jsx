import React, { useState, useEffect } from 'react'
import { Toaster, toast } from 'sonner';
import './Contact.css'
import location from '../../assets/locationlogo.png'
import mail from '../../assets/maillogo.png'
import emailjs from '@emailjs/browser';
import call from '../../assets/calllogo.png'
import wsp from '../../assets/wsplogo.png'


const Contact = ({ contact_ref }) => {

    useEffect(() => emailjs.init("tBVWuXxbt-lDrhJLU"), []);

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [msg, setMsg] = useState('')

    const sendEmail = async (e) => {
        console.log(name, email, phone, msg)

        try {
            if (name, email, phone, msg) {
                await emailjs.send('service_nom56r7', 'template_7nv92cr', {
                    name: name,
                    email: email,
                    phone: phone,
                    msg: msg
                });
                toast.success("We have received your request");
            }
            else {
                toast.error("kindly fill all fields first.");
            }
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

                    <input className='contact_input' type="text" onChange={(e) => setName(e.target.value)} placeholder='your name' />
                    <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder='your email' />
                    <input type="number" onChange={(e) => setPhone(e.target.value)} placeholder='your phone' />
                    <input type="text" onChange={(e) => setMsg(e.target.value)} placeholder='enter your message' />

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
                                <img src={mail} className='icon' />
                                <div>contact@techtonicmedia.in</div>
                            </div>
                        </a>

                        <a href="tel:+919990699649">
                            <div className='contactInfoIcons'>
                                <img src={call} className='icon' />
                                <div>+91 9990699649</div>
                            </div>
                        </a>
                        <a href="https://wa.me/919990699649" target='_blank'>
                            <div className='contactInfoIcons'>
                                <img src={wsp} className='icon' />
                                <div>+91 9990699649</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <Toaster position="top-center" richColors/>
        </div>
    )
}

export default Contact

{/* <div>
            
        </div>

        */}