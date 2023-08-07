import React from 'react';
import '../../App.css';
import './Intro.css';

function AboutMe() {
  const isMobile = /Mobi/.test(navigator.userAgent);

  if(isMobile){
    return (
      <div className="about-me-container">
        <div className="info-container">
          <div className="typewriter-container">
            <h3>My skills</h3>
          </div>
          <div id='skills-mobile'>
          <li className='code'>C++</li>
          <li className='code'>SQL</li>
          <li className='code'>HTML</li>
          <li className='code'>CSS</li>
          <li className='code'>Javascript</li>
          <li className='code'>Java</li>
          <li className='code'>Python</li>
          <li className='code'>Arm Assembly</li>
          <li className='other'>Django</li>
          <li className='other'>React</li>
          <li className='other'>SFML</li>
          <li className='other1'>DOM</li>
          <li className='other1'>OOP</li>
        </div>
        </div>
      </div>
    );
  }
  return (
    
    <div className="about-me-container">
      <div className="info-container">
        <div className="typewriter-container">
        <h3>My skills</h3>
        </div>
        <div className='skills-container'>
        <div id='skills'>
          <ul className='scroll'>
            <img src='/images/skills/C++.png' className='skill'/>
            <img src='/images/skills/SQL.png' className='skill'/>
            <img src='/images/skills/HTML.svg' className='skill'/>
            <img src='/images/skills/CSS.png' className='skill'/>
            <img src='/images/skills/JS.png' className='skill'/>
            <img src='/images/skills/Java.png' className='skill'/>
            <img src='/images/skills/Python.png' className='skill'/>
            <img src='/images/skills/Django.png' className='skill'/>
            <img src='/images/skills/React.png' className='skill'/>
            <img src='/images/skills/SFML.png' className='skill'/>
          </ul>
          <ul className='scroll2'>
            <img src='/images/skills/C++.png' className='skill'/>
            <img src='/images/skills/SQL.png' className='skill'/>
            <img src='/images/skills/HTML.svg' className='skill'/>
            <img src='/images/skills/CSS.png' className='skill'/>
            <img src='/images/skills/JS.png' className='skill'/>
            <img src='/images/skills/Java.png' className='skill'/>
            <img src='/images/skills/Python.png' className='skill'/>
            <img src='/images/skills/Django.png' className='skill'/>
            <img src='/images/skills/React.png' className='skill'/>
            <img src='/images/skills/SFML.png' className='skill'/>
          </ul>
        </div>
        </div>
      </div>
      
    </div>
  );
}

export default AboutMe;
