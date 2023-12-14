import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1> Project Highlights </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/FS.png'
              text='File System'
              label='C++'
            />
            <CardItem
              src='images/Schedule.jpg'
              text='Schedule Chomper'
              label='C++/SFML/Python'
            />
            <CardItem
              src='images/Auction.png'
              text='Ecommerce Website'
              label='HTML/CSS/Python/SQL'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;