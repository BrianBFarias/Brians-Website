import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import './contactForm.css';

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
          <label>Name</label>
          <input type="text" name="user_name" />
          <br/>
          <label>Email</label>
          <input type="email" name="user_email" />
          <br/>
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      );
};