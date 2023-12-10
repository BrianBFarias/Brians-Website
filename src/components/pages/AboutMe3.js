import React from 'react';
import './AboutMe3.css';
import { Link } from 'react-router-dom';

function AboutMe3() {
  const isMobile = /Mobi/.test(navigator.userAgent);

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

  if(isMobile){
    return(
      <div className="ABMD">
        <div className='mob-title-box1'>
            <h2>CaSMM is a cloud based programming interface. <br />
            Led team of 6 during 2 sprints while creating Teacher View 
            cector of this project. </h2>
        </div>

        <div className="info-mat">
            <Link
              to='https://github.com/Team-10g/Emerald-Project17-10g'
            >
            
            <img src="images/casmm.png" alt="" />
            </Link>
        </div>
    </div>
    )
  }
  
  return (
    <div className="ABMD">
        <div className='title-box1'>
            <h2>CaSMM is a cloud based programming interface. <br />
             Led team of 6 during 2 sprints while creating Teacher View 
             sector of this project. </h2>
        </div>

        <div className="info-mat">
            <Link
              to='https://github.com/Team-10g/Emerald-Project17-10g'
            >
            
            <img src="images/casmm.png" alt="" />
            </Link>
        </div>
    </div>
  );
}

export default AboutMe3;
