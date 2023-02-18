import { useEffect, useState,useRef } from 'react';
import Loader from 'react-loaders'; 
import Animate from '../Animate';
import emailjs from '@emailjs/browser';
import './index.scss';

const Contact=()=>{

    const form=useRef();
    const[letterClass,setLetterClass]=useState('text-animate');
    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass('text-animate-hover');
        },4)
    },[]);
    const sendMail=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_ivyno6g','template_h7fjhmq',form.current,'oBj9qRyjcmZogBOE9')
        .then(
            ()=>{
                alert("Message successfully sent !");
                window.location.reload(false);
            },
            ()=>{
                alert("Failed to send the email");
            }
        )
    }
    return(
        <>
        <div className='containner contact-page'>
            <div className='text-zone'>
                <h1>
                  <Animate letterClass={letterClass}
                  strArray={['C','o','n','t','a','c','t',' ','M','e']}
                  idx={15}/>
                </h1>
                <span>
                    I am interested in freelance opportunities </span>
                    <span>- especially ambitious or large projects,
                    .However , if you have other requests or question,</span> 
                    <span>don't hesitate to contact me using below form either.</span>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendMail}> 
                        <ul type='none'>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required autoComplete='off' autoFocus='on'/>
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required  autoComplete='off' autoFocus='on'/>
                            </li>
                            <li className='half'>
                                <input type='text' name='subject' placeholder='Subject' required  autoComplete='off' autoFocus='on'/>
                            </li>
                            <li>
                                <textarea 
                                placeholder='Message'
                                name='message'
                                required
                                />

                            </li>
                            <li>
                                <input type='submit' 
                                className='flat-button' 
                                value='Send'
                                />

                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}
export default Contact;