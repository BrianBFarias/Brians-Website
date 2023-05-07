import React from 'react';
import '../App.css';
import { Button } from './Button';
import {Button1} from './Button1';
import './MainSection.css';

function MainSection() {
  return (
    <div className='main-container'>
      <video autoplay = "autoplay" loop muted >
        <source src="/videos/main1.mp4" type="video/mp4">
        </source>
      </video>  
      <h1 >Welcome</h1>   
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