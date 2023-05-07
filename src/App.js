import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Resume from './components/pages/Resume';
import Services from './components/pages/Services';
import TeamInfo from './components/pages/TeamInfo';
import Intro from './components/pages/Intro';


function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/resume-pdf' element={<Resume/>} />
          <Route path='/intro' element={<Intro/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/TeamInfo' element={<TeamInfo/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
