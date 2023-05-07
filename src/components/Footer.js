import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import emailjs from "emailjs-com";
import ContactUs from './contactForm.js';

function sendEmail(e) {
  e.preventDefault();
  emailjs.sendForm('gmail', 'website_template', e.target, 'SHVR7fKbB9AkOyMWz')
  .then((result) => {
  console.log(result.text);
  }, (error) => {
  console.log(error.text);
  });
  e.target.reset()
  }


function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Feel free to contact me via my email I reply fast
        </p>
        <div className="container">
          <ContactUs/>
        </div>
      </section>
      <div class='footer-links'>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>Thanks for checking out my website</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/brian.b.f/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>

            <Link
              class='social-icon-link LinkedIn'
              to='https://www.linkedin.com/in/bbfarias/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;