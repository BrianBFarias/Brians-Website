import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainSection.css';

function MainSection() {
  return (
    <div className='main-container'>
      <video autoplay = "autoplay" loop muted >
        <source src="/videos/main1.mp4" type="video/mp4">
        </source>
      </video>  
      <h1 style={{color:'White' }}>ADVENTURE AWAITS</h1>
     
      <p style={{color:'White' }}></p>
      
      <div className='main-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Create a Porject
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Join active Porjects
        </Button>
      </div>
    </div>
  );
}

export default MainSection;