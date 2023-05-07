import React from 'react';
import '../App.css';
import { Button } from './Button';
import {Button1} from './Button1';
import './MainSection.css';
import Typewriter from 'typewriter-effect';

function MainSection() {
  return (
    <div className='main-container'>
      <video autoplay = "autoplay" loop muted >
        <source src="/videos/main1.mp4" type="video/mp4">
        </source>
      </video>  
      <div className="typewriter-container2">
          <Typewriter
            options={{
              strings: ['print("Hello, World!")'],
              autoStart: true,
              loop: false,
              delay: 150,
              pauseFor: 99999999
            }}
          />
        </div>
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
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={'/intro'}
        >
          Meet me
        </Button1>
      </div>
    </div>
  );
}

export default MainSection;