import React from 'react';
import '../../App.css';
import MainSection from '../MainSection';
import Cards from '../Cards';
import Footer from '../Footer';
import AboutMe from './Intro';

function Home() {
  return (
    <>
      <MainSection />
      <Cards />
      <AboutMe/>
      <Footer/>
    </>
  );
}

export default Home;
