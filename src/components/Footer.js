import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import ContactUs from './contactForm.js';


function Footer() {
  const isMobile = /Mobi/.test(navigator.userAgent);

  if(isMobile){
    return (
      <div className='mobile-footer-container'>
        <div class='mobile-footer-links'>
        </div>
        <section class='mobile-social-media'>
          <div class='mobile-media-wrap'>
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
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='social-icons'>
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/brian.b.f/'
              target='_blank'
              aria-label='Instagram'>
              <i class='fab fa-instagram' />
            </Link>

          </div>
          <div>
            <p>B.farias1@ufl.edu</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
