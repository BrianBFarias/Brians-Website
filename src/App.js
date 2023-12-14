import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Resume from './components/pages/Resume';
import Projects from './components/ProjectsPage/Projects';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Router>
      <head>
        
      </head>
        <Navbar/>
        <div id='stat' className="status"> 
          <div class="progress-bar" id="myBar"></div>
        </div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/resume-pdf' element={<Resume/>} />
          <Route path='/projects' element={<Projects/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
