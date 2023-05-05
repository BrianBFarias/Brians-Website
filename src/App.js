import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Cookies, CookiesProvider } from 'react-cookie';
import SignUp from './components/pages/SignUp';
import Services from './components/pages/Services';

function App() {
  return (
    <>
    <CookiesProvider>
    <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/services' element={<Services/>} />
        </Routes>
      </Router>
    </CookiesProvider>
    </>
  );
}

export default App;
