import React from 'react';
import '../../App.css';
import MainSection from '../MainSection';
import Cards from '../Cards';
import Footer from '../Footer';
import AboutMe from './Intro';
import Projects from './Projects';

function Home() {
  return (
    <>
      <MainSection />
      <Cards />
      <AboutMe/>
      <Projects/>
      <Footer/>
    </>
  );
}

export default Home;
