import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () =>{
    setClick(!click);
  } 
  const closeMobileMenu = () =>{
    setClick(false);
  } 

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav id='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            BF
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'mobile-nav-menu' : 'nav-menu'}>
          <li>
              <Link
                to='/projects'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to='/resume-pdf'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Resume
              </Link>
            </li>
          </ul>
          {button && <Button path="/projects" id="projects" buttonStyle="btn--section"> Projects </Button>}

          {button && <Button path="/resume-pdf" id="projects" buttonStyle='btn--section'>Resume</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
