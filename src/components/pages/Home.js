import React from 'react';
import '../../App.css';
import MainSection from '../MainSection';
import Cards from '../Cards';
import Section2 from './Section2';
import AboutMe2 from './AboutMe2';
import AboutMe3 from './AboutMe3';
import Projects from './Projects';

function Home() {
  console.log(window.location.pathname);

  window.addEventListener('scroll', onScroll);

  function onScroll(){
      window.onscroll = () => {
        const statusBar = document.getElementById('stat');

        if(window.location.pathname != "/"){
          statusBar.className = 'status-gone';
          return;
        }
        else{
          statusBar.className = 'status';
        }

        var tile1s = document.querySelectorAll('#tile1');
        var tile2s = document.querySelectorAll('#tile2');
    
        const navBar = document.getElementById('navbar');
    
        const cards = document.querySelector('.cards')
        const skills = document.querySelector('.MeSection');
        const cards2 = document.getElementById('live-proj');
        const aboutMe = document.querySelector('.ABMC');
    
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight-750) {
          // Change color to green
          for(var i=0; i<tile2s.length; i++){
              tile2s[i].style.animationPlayState = 'running';
          }
          for(var i=0; i<tile1s.length; i++){
            tile1s[i].style.animationPlayState = 'running';
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
    
        const part1 = skills.offsetHeight-navBar.offsetHeight;
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
    }

  }

  return (
    <>
      <MainSection />
      <Section2/>
      <Cards />
      <Projects/>
      <AboutMe2/>
      <AboutMe3/>
    </>
  );
}

export default Home;
