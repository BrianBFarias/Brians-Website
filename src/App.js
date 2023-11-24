import React, {useState} from 'react';
import Navbar from './components/Navbar';
import './App.css';

import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Resume from './components/pages/Resume';
import Intro from './components/pages/Intro';


function App() {
window.addEventListener('scroll', onScroll); 

function onScroll(){
    window.onscroll = () => {
      var tile1s = document.querySelectorAll('#tile1');
      var tile2s = document.querySelectorAll('#tile2');
  
      const statusBar = document.getElementById('stat');
      const navBar = document.getElementById('navbar');
  
      const cards = document.querySelector('.cards')
      const skills = document.querySelector('.about-me-container');
      const cards2 = document.getElementById('live-proj');
      const aboutMe = document.querySelector('.ABMC');
  
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight-750) {
        // Change color to green
        document.querySelector('.Me-title').style.animationPlayState = 'running';
        for(var i=0; i<tile2s.length; i++){
            tile1s[i].style.animationPlayState = 'running';
            tile2s[i].style.animationPlayState = 'running';
        }
      }
  
      if(window.scrollY<340)
      navBar.style.top = `0px`;
  
      if(window.scrollY>340){
        let topVal = 339 - window.scrollY;
        navBar.style.top = `${topVal}px`;
        statusBar.className = 'status';
      }
      else{
        
        statusBar.className = 'status-gone';
      }
  
      // ------progress bar----
  
      var height = window.scrollY;
  
      const part1 = navBar.offsetHeight;
      const part2 = part1 + cards.offsetHeight;
      const part3 = part2 + cards2.offsetHeight;
      const part4 = part3 + aboutMe.offsetHeight
      
      if(height > part1 && height < part2){
        console.log("entered");
        document.getElementById("myBar").style.width = "25%";
      }
      else if(height > part2 && height < part3){
        document.getElementById("myBar").style.width = "50%";
      }
      else if(height > part3 && height < part4){
        document.getElementById("myBar").style.width = "75%";
      }
      else if(height>part4){
        document.getElementById("myBar").style.width ="100%";
      }
      else{
        document.getElementById("myBar").style.width ="0%";
      }
      
    };
  }

  return (
    <>
    <Router>
        <Navbar 
        />
        <div id='stat' className="status"> 
          <div class="progress-bar" id="myBar"></div>
        </div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/resume-pdf' element={<Resume/>} />
          <Route path='/intro' element={<Intro/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
