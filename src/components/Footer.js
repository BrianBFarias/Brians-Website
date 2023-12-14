import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


function Footer() {
  const isMobile = /Mobi/.test(navigator.userAgent);
  if(isMobile){
    return (
      <div className='footer-container'>
        <section class='social-media'>
          <div class='mob-social-media-wrap'>
          <div>
              <p>Connect with me </p>
            </div>
            <div class='social-icons'>
              <Link
                  class='social-icon-link'
                  to='https://www.linkedin.com/in/bbfarias/'
                  target='_blank'
                  aria-label='LinkedIn'>
                  <i class='fab fa-linkedin' />
              </Link>
              
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

  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
        <div>
            <p>Connect with me </p>
          </div>
          <div class='social-icons'>
            <Link
                class='social-icon-link'
                to='https://www.linkedin.com/in/bbfarias/'
                target='_blank'
                aria-label='LinkedIn'>
                <i class='fab fa-linkedin' />
            </Link>
            
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
