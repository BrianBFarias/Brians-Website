import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import './contactForm.css';
import { Button } from './Button';

export default function ContactUs() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_8nvr5g4', 'website_template', form.current, 'SHVR7fKbB9AkOyMWz')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        form.current.reset()

    };
  
    return (
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <input type="text" id="user_name" name="user_name" placeholder='Name' />
          </div>
          <div className="form-group">
            <input type="email" id="user_email" name="user_email" placeholder='Email'/>
          </div>
          <div className="form-group">
            <textarea id="message" name="message" placeholder='Type message'/>
          </div>
          <button className="btn-send" type="submit">Send</button>
        </form>
      );
};