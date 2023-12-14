import React from 'react';
import '../../App.css';
import './Projects.css';
import '../Cards.css';
import CardItem from '../CardItem';

function Projects() {
  const isMobile = /Mobi/.test(navigator.userAgent);

  if(isMobile){
    return (
      <section id='live-proj' className="mob-lp">
      <div className='info-mat'>
        <div className='cards_container'>
            <CardItem
              src='images/SR.png'
              text='(Beta) Hot Sauce rating site'
              label='Python/JS/HTML/CSS'
              path='https://saucer-roster.up.railway.app/'
            />
        </div>
      </div>
      <div className='title-box'>
        <h2>Live Projects</h2>
      </div>
    </section>
    );
  }
  return (
    <section id='live-proj' className="lp">
      <div className='title-box'>
        <h2>Live Projects</h2>
      </div>
      <div className='info-mat'>
        <div className='cards_container'>
            <CardItem
              src='images/SR.png'
              text='(Beta) Hot Sauce rating site'
              label='Python/JS/HTML/CSS'
              path='https://saucer-roster.up.railway.app/'
            />
        </div>
      </div>
    </section>
  );
}

export default Projects;
