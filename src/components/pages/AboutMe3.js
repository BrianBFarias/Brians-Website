import React from 'react';
import './AboutMe3.css';
import { Link } from 'react-router-dom';

function AboutMe3() {
  document.addEventListener('DOMContentLoaded', function(){

    var tile1s = document.querySelectorAll('#tile1');
    var tile2s = document.querySelectorAll('#tile2');

    for(var i=0; i<tile1s.length; i++){
        tile1s[i].style.animationPlayState = 'paused';
    }

    for(var i=0; i<tile2s.length; i++){
        tile2s[i].style.animationPlayState = 'paused';
    }
  })
  
  return (
    <div className="ABMD">
        <div className='title-box1'>
            <h2>Connect With Me</h2>
        </div>

        <div className="info-mat">
            <Link
                class='social-icon-link'
                to='https://www.linkedin.com/in/bbfarias/'
                target='_blank'
                aria-label='LinkedIn'>
                <i class='fab fa-linkedin' />
            </Link>
        </div>
    </div>
  );
}

export default AboutMe3;
