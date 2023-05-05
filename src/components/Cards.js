import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Learn More!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src = "images/group-project.jpg"
                    text = "Find the project that best fits you"
                    path = '/services'
                    />
                  
                    <CardItem 
                    src = "images/Our-Story.jpg"
                    text = "Our Story"
                    // small label on group project picture VVVV
                    label = "Founder/CFO"
                    path = '/services'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards