import React from 'react';
import './AboutMe2.css';

function AboutMe2() {
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
    <div className="ABMC">
        <div className="info-mat">
            <div id='tile1'>
                <h2>Full-Stack Developer for The Agency at UF</h2>
            </div>
            <div id='tile2'>
                <h2>Scrum Master for CaSMM, Cloud-Based Programming Interface</h2>
            </div>
            <div id='tile1'>
                <h2> IT Help Desk Technician at RAS LLC</h2>
            </div>
            <div id='tile2'>
                <h2>Harvard's CS50 Web Programming with Python</h2>
            </div>
        </div>
        <div className='title-box1'>
            <h2>Experience</h2>
        </div>
    </div>
  );
}

export default AboutMe2;
