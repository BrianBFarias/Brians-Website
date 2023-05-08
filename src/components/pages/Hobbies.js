import React from 'react';
import './Hobbies.css';

function Hobbies() {
  return (
    <div className="hobbies-container">
      <div className="hobby">
        <img src="./images/swim.jpg" alt="hobby1" />
        <div>
          <h2>Swimming</h2>
          <p>During Highschool I was privleged with being captain of the swim team. I really enjoyed my years swimming and when I come back home sometimes ill 
            swim a little just so I can make sure im still in athletic shape </p>
        </div>
      </div>
      <div className="hobby">
        <img src="./images/SW.jpg" alt="hobby2" />
        <div>
          <h2>Working out</h2>
          <p>Since swimming I've picked up working out, where I go to UF's weightlifting gym 5 times a week, never skipping a day. Working out allows me to pipckup
            on something I persistenetly work on while being able to socialize with friends </p>
        </div>
      </div>
      <div className="hobby">
        <img src="./images/js.jpg" alt="hobby3" />
        <div>
          <h2>New Side Skills</h2>
          <p>I like to explore new environments as a relative "newby" to coding I feel it's important for me to explore different sectors of programmming, thus this website.
            I've used this as not only an oppurtunity for an intro into full stack development but also working with API's and hosting platforms. Althought this website is simple
            it is my first major project using Javascript and CSS paired with a emailjs API.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hobbies;
