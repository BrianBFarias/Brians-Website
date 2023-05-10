import React, { useState, useEffect } from 'react';
import './Hobbies.css';

function Hobbies() {
  const isMobile = /Mobi/.test(navigator.userAgent);

  if (isMobile) {
    return (
      <div className="mobile-hobbies-container">
        <div className="mobile-hobby">
          <img src="./images/swim.jpg" alt="hobby1" />
          <div>
            <h2>Swimming</h2>
            <p>During my high school years, I had the privilege of being the captain of the swim team.
              Being a part of the swim team taught me the importance of teamwork, leadership, and perseverance. These skills have continued to 
              serve me well in my personal and professional life. I am grateful for the experiences 
              and opportunities that swimming has provided me, and I continue to prioritize staying 
              active to maintain my physical and mental well-being. </p>
          </div>
        </div>
        <div className="mobile-hobby">
          <img src="./images/SW.jpg" alt="hobby2" />
          <div>
            <h2>Working out</h2>
            <p>Since incorporating swimming into my routine, I have also picked up weightlifting and now visit UF's weightlifting gym five times a week without skipping a
               day. I find that working out not only allows me to persistently work towards a personal goal but 
              also provides an opportunity to socialize with friends. Through this commitment to fitness, 
              I have developed a strong sense of discipline and determination that I can apply to all areas of my life.
               Overall, staying active has been a rewarding and enriching aspect of my daily routine. </p>
          </div>
        </div>
        <div className="mobile-hobby">
          <img src="./images/js.jpg" alt="hobby3" />
          <div>
            <h2>New Side Skills</h2>
            <p>As an aspiring software engineer, I understand the importance of exploring 
              various programming sectors to broaden my skills. The development
               of this website provided me with an introduction to full stack development, API 
              integration and hosting platforms. Despite the website's simplicity, it marked a significant milestone in my journey as it was my 
              first major project using JavaScript and CSS with emailjs API integration. This experience demonstrated 
              my ability to learn and adapt to new technologies while prioritizing quality. I'm confident this foundation will 
              enable me to excel in future software engineering pursuits.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="hobbies-container">
      <div className="hobby">
        <img src="./images/swim.jpg" alt="hobby1" />
        <div>
          <h2>Swimming</h2>
          <p>During my high school years, I had the privilege of being the captain of the swim team.
              Being a part of the swim team taught me the importance of teamwork, leadership, and perseverance. These skills have continued to 
              serve me well in my personal and professional life. I am grateful for the experiences 
              and opportunities that swimming has provided me, and I continue to prioritize staying 
              active to maintain my physical and mental well-being.</p>
        </div>
      </div>
      <div className="hobby">
        <img src="./images/SW.jpg" alt="hobby2" />
        <div>
          <h2>Working out</h2>
          <p>Since incorporating swimming into my routine, I have also picked up weightlifting and now visit UF's weightlifting gym five times a week without skipping a
              day. I find that working out not only allows me to persistently work towards a personal goal but 
              also provides an opportunity to socialize with friends. Through this commitment to fitness, 
              I have developed a strong sense of discipline and determination that I can apply to all</p>
        </div>
      </div>
      <div className="hobby">
        <img src="./images/js.jpg" alt="hobby3" />
        <div>
          <h2>New Side Skills</h2>
          <p>As an aspiring software engineer, I recognize the importance of exploring different sectors of programming and continually expanding my skill set. This website 
            has provided me with a valuable opportunity to not only gain an introduction to full stack development, but also to work with API's and hosting platforms.
            <br/>
            <br/>
            Through the utilization of Javascript and CSS, along with the integration of an emailjs API, I was able to develop a functional and user-friendly website. This project 
            serves as a testament to my ability to learn and implement new technologies, as well as my dedication to producing high-quality work.
            <br/>
            <br/>
            As I continue to progress in my career as a software engineer, I am confident that this experience will serve as a foundation for my future successes and accomplishments.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hobbies;
