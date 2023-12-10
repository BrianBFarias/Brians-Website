import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1> <div className='bar2' ></div> Projects I've worked on <div className='bar2'></div> </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/AVL.jpg'
              text='UF Student info AVL tree'
              label='C++'
              path='https://github.com/BrianBFarias/Gator-AVL-Tree'
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
          <ul className='cards__items'>
            <CardItem
              src='images/network.png'
              text='Linker: Networking site'
              label='Python/Javscript/HTML/CSS'
              path='https://github.com/BrianBFarias/linker'
            />
            <CardItem
              src='images/Pakudex.jpg'
              text='Pakudex: Pokemon holder'
              label='Java'
              path='https://github.com/BrianBFarias/Pakudex'
            />

            <CardItem
              src='images/PageRank.jpg'
              text='Simplified PageRank Algorithm'
              label='C++'
              path='https://github.com/BrianBFarias/PageRank-Algorithm'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;