import React from 'react';
import '../../App.css';
import './Projects.css';
import '../Cards.css';
import CardItem from '../CardItem';

function Projects() {
  const isMobile = /Mobi/.test(navigator.userAgent);

  if(isMobile){
    return (
        <section id='live-proj'>
        <h2>Live Projects</h2>
        <div>

        </div>
        <div className='cards_container'>
            <CardItem
              src='images/SR.png'
              text='(Beta) Hot Sauce rating site'
              label='Python/JS/HTML/CSS/SQL'
              path='https://saucer-roster.up.railway.app/'
            />
      </div>
    </section>
    );
  }
  return (
    <section id='live-proj'>
        <h2>Live Projects</h2>
        <div>

        </div>
        <div className='cards_container'>
            <CardItem
              src='images/SR.png'
              text='(Beta) Hot Sauce rating site'
              label='Python/JS/HTML/CSS'
              path='https://saucer-roster.up.railway.app/'
            />
      </div>
    </section>
  );
}

export default Projects;
