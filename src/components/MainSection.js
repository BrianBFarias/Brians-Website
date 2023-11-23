import React, { useEffect } from "react";
import '../App.css';
import './MainSection.css';
import Typewriter from 'typewriter-effect';

function MainSection() {
  useEffect(() => {
    const starField = document.getElementById('star-field');
    const starFieldWidth = window.innerWidth;
    const starFieldHeight = window.innerHeight * 0.55;

    const noOfStars = starFieldWidth < 960 ? 100 : 250;

    addStars(starField, starFieldWidth, starFieldHeight, noOfStars);
    animateStars(starField, starFieldWidth, 5);

    // Clean up function
    return () => {
      // Any necessary cleanup code
    };
  }, []);

  function addStars(starField, starFieldWidth, starFieldHeight, noOfStars) {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < noOfStars; i++) {
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
      return Math.sin(index) / 10;
    }

    function updateStarPosition(star, i) {
      stars[i].className = 'star ' + getStarColor(i) + ' ' + getStarDistance(i);

      const currentLeft = parseInt(star.style.left, 10);
      const currentTop = parseInt(star.style.top, 10);

      const leftChangeAmount = speed + getStarRelativeSpeed(i);
      const leftDiff = (currentLeft - leftChangeAmount + starFieldWidth) % starFieldWidth;

      const bobbingOffset = getBobbingOffset(i);
      const topOffset = currentTop + bobbingOffset;

      if (topOffset < 0) {
        star.style.top = window.innerHeight * 0.55 + Math.random() * 20 + 'px';
        star.style.left = Math.floor(Math.random() * starFieldWidth) + 'px';
      } else {
        star.style.left = leftDiff + 'px';
        star.style.top = topOffset + 'px';
      }
    }

    function animate() {
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
        <Typewriter
          options={{
            strings: ["Hello, I'm Brian"],
            autoStart: true,
            loop: false,
            delay: 100,
            pauseFor: 999999
          }}
        />
      </h1>
    </div>
  );
}

export default MainSection;
