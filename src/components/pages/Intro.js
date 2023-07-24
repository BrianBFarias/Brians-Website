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
        <div id='skills'>
          <div>
            <li className='code'>C++</li>
            <hr />
            <li className='code'>SQL</li>
            <hr />
            <li className='code'>HTML</li>
            <hr />
            <li className='code'>CSS</li>
            <hr />
            <li className='code'>Javascript</li>
            <hr />
            <li className='code'>Java</li>
            <hr />
            <li className='code'>Python</li>
            <hr />
            <li className='code'>Arm Assembly</li>
          </div>

          <div>
            <li className='other'>Django</li>
            <hr />
            <li className='other'>React</li>
            <hr />
            <li className='other'>SFML</li>
          </div>

          <div>
            <li className='other1'>DOM</li>
            <hr />
            <li className='other1'>OOP</li>
          </div>

        </div>
      </div>
      
    </div>
  );
}

export default AboutMe;
