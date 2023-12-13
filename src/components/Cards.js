import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1> <div className='bar2' ></div> Project Highlights <div className='bar2'></div> </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/FS.png'
              text='File System'
              label='C++'
              path=''
            />
            <CardItem
              src='images/Schedule.jpg'
              text='Schedule Chomper'
              label='C++/SFML/Python'
              path='https://github.com/BrianBFarias/Schedule-Chomper'
            />
            <CardItem
              src='images/Auction.png'
              text='Ecommerce Website'
              label='HTML/CSS/Python/SQL'
              path='https://github.com/BrianBFarias/ecommerce-website.git'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;