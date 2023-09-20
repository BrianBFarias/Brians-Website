import React from 'react';
import './AboutMe2.css';

function AboutMe2() {
  const isMobile = /Mobi/.test(navigator.userAgent);
  document.addEventListener('DOMContentLoaded', function(){
    try {
        document.querySelector('.Me-title').style.animationPlayState = 'paused';
    } catch (error) {
        return true;
    }
    var tile1s = document.querySelectorAll('#tile1');
    var tile2s = document.querySelectorAll('#tile2');

    for(var i=0; i<tile2s.length; i++){
        tile1s[i].style.animationPlayState = 'paused';
        tile2s[i].style.animationPlayState = 'paused';
    }
  })
  window.onscroll = () => {
    // console.log(window.scrollY);
    var tile1s = document.querySelectorAll('#tile1');
    var tile2s = document.querySelectorAll('#tile2');
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight-700) {
        // Change color to green
        document.querySelector('.Me-title').style.animationPlayState = 'running';
        for(var i=0; i<tile2s.length; i++){
            tile1s[i].style.animationPlayState = 'running';
            tile2s[i].style.animationPlayState = 'running';
        }
    }
    else{
        document.querySelector('.Me-title').style.animationPlayState = 'paused';
        for(var i=0; i<tile2s.length; i++){
            tile1s[i].style.animationPlayState = 'paused';
            tile2s[i].style.animationPlayState = 'paused';
        }
        }
  }

  return (
    
    <div className="ABMC">
        <h1 className='Me-title'>A little About Me</h1>
        <div id='tile1'>
            <h2>Class of 2025 at the University of Florida</h2>
        </div>
        <div id='tile2'>
            <h2>Studying a Bachelors in Computer Science </h2>
        </div>
        <div id='tile1'>
            <h2> Upper Division GPA: <strong>3.61</strong></h2>
        </div>
        <div id='tile2'>
            <h2> I <i class="fa-regular fa-heart"></i> Working out, Software Engineering, and dogs</h2>
        </div>
    </div>
  );
}

export default AboutMe2;
