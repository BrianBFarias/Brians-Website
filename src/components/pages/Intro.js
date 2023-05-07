import React from 'react';
import '../../App.css';
import './Intro.css';

function AboutMe() {
  return (
    <div className="about-me">
      <div className="avatar">
        <img src={'./images/BrianPic.jpg'} alt="Avatar" width="350px" height="350px" />
      </div>
      <div className="info">
        <h1>My Name</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
          commodo elit. Sed euismod nunc ut tortor elementum feugiat.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;