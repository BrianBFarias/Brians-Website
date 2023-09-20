import React from 'react';
import '../../App.css';
import MainSection from '../MainSection';
import Cards from '../Cards';
import Footer from '../Footer';
import AboutMe from './Intro';
import AboutMe2 from './AboutMe2';
import Projects from './Projects';

function Home() {
  return (
    <>
      <MainSection />
      <Cards />
      <AboutMe/>
      <Projects/>
      <AboutMe2/>
      <Footer/>
    </>
  );
}

export default Home;
