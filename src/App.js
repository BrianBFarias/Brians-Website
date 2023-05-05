import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Cookies, CookiesProvider } from 'react-cookie';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
    <CookiesProvider>
    <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/sign-up' element={<SignUp/>} />
        </Routes>
      </Router>
    </CookiesProvider>
    </>
  );
}

export default App;
