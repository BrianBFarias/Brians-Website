import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import ContactUs from './contactForm.js';


function Footer() {
  const isMobile = /Mobi/.test(navigator.userAgent);

  if(isMobile){
    return (
      <div className='mobile-footer-container'>
        <section className='mobile-footer-subscription'>
          <p className='mobile-heading'>
            Contact me
          </p>
          <div className="mobile-container">
            <ContactUs/>
          </div>
        </section>
        <div class='mobile-footer-links'>
        </div>
        <section class='mobile-social-media'>
          <div class='mobile-media-wrap'>
            <small class='mobile-footer-notes'>Thanks for checking out my website</small>
            <div class='mobile-social-icons'>
              <Link
                class='mobile-icon-link instagram'
                to='https://www.instagram.com/brian.b.f/'
                target='_blank'
                aria-label='Instagram'
              >
                <i class='fab fa-instagram' />
              </Link>
  
              <Link
                class='mobile-icon-link LinkedIn'
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
          <small class='website-rights'>Thanks for checking out my website. This website
             has been optimized for mobile use so feel free to check it out on your mobile device too!!!</small>
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