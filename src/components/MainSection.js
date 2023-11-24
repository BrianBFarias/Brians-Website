import React, { useEffect } from "react";
import '../App.css';
import './MainSection.css';
import Typewriter from 'typewriter-effect';

function MainSection() {
  useEffect(() => {
    const starField = document.getElementById('star-field');
    const starFieldWidth = window.innerWidth+10;
    const starFieldHeight = window.innerHeight * 0.55;
    var app = document.getElementById('name');

    const noOfStars = starFieldWidth < 960 ? 70 : 200;

    addStars(starField, starFieldWidth, starFieldHeight, noOfStars);
    animateStars(starField, starFieldWidth, -1);
  }, []);

  function addStars(starField, starFieldWidth, starFieldHeight, noOfStars) {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < noOfStars; i+=3) {
      const star = document.createElement('div');
      star.className = 'star';
      const topOffset = Math.floor((Math.random() * starFieldHeight) + 1);
      const leftOffset = Math.floor((Math.random() * starFieldWidth) + 1);
      star.style.top = topOffset + 'px';
      star.style.left = leftOffset + 'px';
      star.style.position = 'absolute';
      fragment.appendChild(star);
    }

    starField.appendChild(fragment);
  }

  function animateStars(starField, starFieldWidth, speed) {
    const stars = starField.childNodes;

    function getBobbingOffset(index) {
      return Math.sin(index);
    }

    function updateStarPosition(star, i) {
      star.className = 'star ' + getStarColor(i) + ' ' + getStarDistance(i);

      const currentLeft = parseInt(star.style.left, 10);
      const currentTop = parseInt(star.style.top, 10);

      const leftChangeAmount = speed + getStarRelativeSpeed(i);
      const leftDiff = (currentLeft - leftChangeAmount + starFieldWidth) % starFieldWidth;

      const bobbingOffset = getBobbingOffset(i);
      const topOffset = currentTop + bobbingOffset;

      if (topOffset < 0) {
        star.style.top = window.innerHeight + Math.random() * 20 + 'px';
        star.style.left = Math.floor(Math.random() * starFieldWidth) + 'px';
      } else {
        star.style.left = leftDiff + 'px';
        star.style.top = topOffset + 'px';
      }
    }

    function animate(){
      for (let i = 1; i < stars.length; i++) {
        updateStarPosition(stars[i], i);
      }

      requestAnimationFrame(animate);
    }
    animate();
  }

  function getStarColor(index) {
    if (index % 8 === 0)
      return 'red';
    else if (index % 10 === 0)
      return 'yellow';
    else if (index % 17 === 0)
      return 'blue';
    else
      return 'white';
  }

  function getStarDistance(index) {
    if (index % 6 === 0)
      return '';
    else if (index % 9 === 0)
      return 'near';
    else if (index % 2 === 0)
      return 'far';
    else
      return 0;
  }

  function getStarRelativeSpeed(index) {
    if (index % 6 === 0)
      return 1;
    else if (index % 9 === 0)
      return 2;
    else if (index % 2 === 0)
      return -1;
    else
      return 0;
  }

  return (
    <div id='star-field'>
      <h1 id="name">
        Hello I'm Brian
      </h1>
    </div>
  );
}

export default MainSection;
