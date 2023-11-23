import React, { useState, useEffect } from "react";
import '../App.css';
import './MainSection.css';
import Typewriter from 'typewriter-effect';

function MainSection() {
  var starFieldWidth = window.innerWidth;
  var starFieldHeight = window.innerHeight*.45;
  
  useEffect(()=>{
    addStars(starFieldWidth, starFieldHeight, 420);
    animateStars(starFieldWidth, 5);
    console.log("adding starts")
  },[]);
  
  // TODO: make some stars bigger than others, and have some blue,
// red or white
function addStars(starFieldWidth, starFieldHeight, noOfStars) {
  var starField = document.getElementById('star-field');
  var numberOfStars = noOfStars;
  
  for (var i = 0; i < numberOfStars; i++) {
    var star = document.createElement('div');
  	star.className = 'star';
    var topOffset = Math.floor((Math.random() * starFieldHeight) + 1);
    var leftOffset = Math.floor((Math.random() * starFieldWidth) + 1);
    star.style.top = topOffset + 'px';
    star.style.left = leftOffset + 'px';
    star.style.position = 'absolute';
  	starField.appendChild(star);
  }
}

function animateStars(starFieldWidth, speed) {
  var starField = document.getElementById('star-field');
  var stars = starField.childNodes;

  function getBobbingOffset(index) {
    // Use sine function to create a bobbing effect
    return Math.sin(index / 10) * 2; // You can adjust the amplitude (5 in this case) for the bobbing effect
  }
  
  function getStarColor(index) {
    if (index % 8 == 0)
      return 'red';
    else if (index % 10 == 0)
      return 'yellow';
    else if (index % 17 == 0)
      return 'blue';
    else
      return 'white';
  }
  
  function getStarDistance(index) {
    if (index % 6 == 0)
      return '';
    else if (index % 9 == 0)
      return 'near';
    else if (index % 2 == 0)
      return 'far';
    else
      return 0;
  }
  
  function getStarRelativeSpeed(index) {
    if (index % 6 == 0)
      return 1;
    else if (index % 9 == 0)
      return 2;
    else if (index % 2 == 0)
      return -1;
    else
      return 0;
  }
  
  setInterval(function() {
    for (var i = 1; i < stars.length; i++) {
      stars[i].className = 'star' + ' ' + getStarColor(i) +' '+ getStarDistance(i); 

      var currentLeft = parseInt(stars[i].style.left, 10);
      var leftChangeAmount = speed + getStarRelativeSpeed(i);
      var leftDiff;
      if (currentLeft - leftChangeAmount < 0) {
        leftDiff = currentLeft - leftChangeAmount + starFieldWidth;
      }
      else {
        leftDiff = currentLeft - leftChangeAmount;
      }
      stars[i].style.left = (leftDiff) + 'px';

      var bobbingOffset = getBobbingOffset(i);
      var topOffset = parseInt(stars[i].style.top, 10) + bobbingOffset;

      stars[i].style.top = topOffset + 'px';

    }
    
  }, 20);
  
}

  return (
    <div id='star-field'>
      <h1 id="name">            
      <Typewriter
              options={{
                strings: ["Hello, I'm Brian"],
                autoStart: true,
                loop: false,
                delay: 100,
                pauseFor: 999999
              }}
            /></h1>
    </div>
  );
}

export default MainSection;