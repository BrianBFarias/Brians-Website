import React from 'react';
import '../../App.css';
import './Intro.css';
import Typewriter from 'typewriter-effect';

function AboutMe() {
  return (
    <div className="about-me">
      <div className="avatar">
        <img src={'./images/BrianPic.jpg'} alt="Avatar" width="350px" height="350px" />
      </div>
      <div className="info-container">
        <div className="typewriter-container">
          <Typewriter
            options={{
              strings: ["Hello, I'm Brian"],
              autoStart: true,
              loop: false,
              delay: 100,
              pauseFor: 999999
            }}
          />
        </div>
        <p>
          I'm a junior at the University of Florida working on a Bachelors in Computer Science
        </p>
        <br/>
        <p>
          Some of my Skills include C++, Javascript, and Java. I also have experience with react, which this website is built from!
        </p>
        <br/>
        <p>
        I previously worked at a law firm in Florida (RAS PLLC) for 4 summers (8 months total), working in all sectors of the IT department, starting at Inventory to ending as a technician. 
        </p>
        <br/>
        <p>
        Awarded the Herbert Wertheim College of Engineering Dean’s List my first semester in college and graduated High school with a Cambridge AICE Diploma certificate with Merit.        
        </p>
        <br/>
        <p>
        I'm looking to improve my skills further while also being able to contribute as a part of a team. Please feel free to contact me via my Email Brian03032003@gmail.com or through my LinkedIn in my main menu screen.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;