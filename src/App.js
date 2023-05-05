import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import ReactDOM, {render} from 'react-dom'
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Cookies, CookiesProvider } from 'react-cookie';


function App() {
  return (
    <>
    <CookiesProvider>
    <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </Router>
    </CookiesProvider>
    </>
  );
}

export default App;
