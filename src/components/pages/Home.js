import React from 'react';
import '../../App.css';
import MainSection from '../MainSection';
import Cards from '../Cards';
import Footer from '../Footer';
import Section2 from './Section2';
import AboutMe2 from './AboutMe2';
import AboutMe3 from './AboutMe3';
import Projects from './Projects';

function Home() {
  return (
    <>
      <MainSection />
      <Cards />
      <Section2/>
      <Projects/>
      <AboutMe2/>
      <AboutMe3/>
      <Footer/>
    </>
  );
}

export default Home;
