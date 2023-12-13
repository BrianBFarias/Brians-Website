import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Button1 } from './Button1';
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
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
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
          {button && <Button1 id="projects" buttonStyle="btn--section"> Projects </Button1>}

          {button && <Button buttonStyle='btn--outline'>Resume</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
