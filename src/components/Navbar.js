import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBitcoin } from 'react-icons/fa'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false); 
    } else {
      setButton(true);
    }
  }

  window.addEventListener('resize', showButton);

  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
        <div className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <FaBitcoin
              className='navbar-icon' />
              KazCryptoPay
            </Link>
            <div className='menu-icon' onClick={handleClick} >
            {click ? <FaTimes /> : <FaBars /> }
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <Link to='/employee' className="nav-links" onClick={closeMobileMenu}>
                  Emplyees
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/currency' className="nav-links" onClick={closeMobileMenu}>
                  Currency
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/about-us' className="nav-links" onClick={closeMobileMenu}>
                  About Us  
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/my-account' className="nav-links" onClick={closeMobileMenu}>
                  My Account 
                </Link>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link to='/sign-up' className="btn-link">
                    <Button buttonStyle='btn--wide'>Sign Up</Button>
                  </Link>
                ) : (
                  <Link to='/sign-up' className="btn-link" onClick={closeMobileMenu}>
                    <Button buttonStyle='btn--wide' buttonSize='btn--large'>Sign Up</Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
        </IconContext.Provider>
    </>
  )
}

export default Navbar