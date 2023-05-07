import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Cookies, CookiesProvider } from 'react-cookie';
import Resume from './components/pages/Resume';
import Services from './components/pages/Services';
import TeamInfo from './components/pages/TeamInfo';
import Intro from './components/pages/Login';


function App() {
  return (
    <>
    <CookiesProvider>
    <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/resume-pdf' element={<Resume/>} />
          <Route path='/login' element={<Intro/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/TeamInfo' element={<TeamInfo/>} />
        </Routes>
      </Router>
    </CookiesProvider>
    </>
  );
}

export default App;
