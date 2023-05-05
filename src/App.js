import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Cookies, CookiesProvider } from 'react-cookie';
import Services from './component/pages/SignUp';

function App() {
  return (
    <>
    <CookiesProvider>
    <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/services' component={Services}/>
        </Routes>
      </Router>
    </CookiesProvider>
    </>
  );
}

export default App;
