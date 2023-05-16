import React, { useState, useEffect } from "react";
import '../App.css';
import { Button } from './Button';
import {Button1} from './Button1';
import './MainSection.css';
import Typewriter from 'typewriter-effect';

function MainSection() {
  const isMobile = /Mobi/.test(navigator.userAgent);

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  if(isMobile){
    useEffect(() => {
      const video = document.querySelector(".MobileVideo");
      video.addEventListener("canplaythrough", () => {
        setIsVideoLoaded(true);
      });
    }, []);
  
    return (
      <div className='main-mobile-container'>
        <video className='MobileVideo' src="/images/Background.mp4" type="video/mp4" autoPlay playsInline loop muted></video> 
        {isVideoLoaded && (
          <div className="welcome-mobile">
            <h1>Welcome</h1>
          </div>
          )}
          <br/>
        <div className='main-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large1'
          >
            Resume
          </Button>
          <Button1
            className='btns1'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
          >
            Meet me
          </Button1>
        </div>
      </div>
    );
  }
  // const string = isMobile ? 'typewriter-container-mobile' : 'typewriter-container-web")';

  useEffect(() => {
    const video = document.querySelector(".WebVideo");
    video.addEventListener("canplaythrough", () => {
      setIsVideoLoaded(true);
    });
  }, []);

  return (
    <div className='main-container'>
      <video className = "WebVideo" autoplay = "autoplay" loop muted >
        <source src="/videos/main1.mp4" type="video/mp4">
        </source>
      </video>  
      {isVideoLoaded && (
        <div className="welcome-web">
          <h1>Welcome</h1>
        </div>
      )}
        <br/>
      <div className='main-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large1'
        >
          Resume
        </Button>
        <Button1
          className='btns1'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Meet me
        </Button1>
      </div>
    </div>
  );
}

export default MainSection;