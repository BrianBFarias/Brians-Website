import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Projects I've worked on</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/AVL.jpg'
              text=''
              label='C++'
              path='/services'
            />
            <CardItem
              src='images/Schedule.jpg'
              text=''
              label='C++/SFML/Python'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Pakudex.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Java'
              path='/services'
            />
            <CardItem
              src='images/Cache.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='C++'
              path='/products'
            />
            <CardItem
              src='images/PageRank.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='C++'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;