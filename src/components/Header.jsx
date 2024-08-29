import { useState } from 'react';
import iconHamburger from '../assets/images/icon-hamburger.svg';
import iconClose from '../assets/images/icon-close.svg';
import logo from '../assets/images/logo.svg';
import MobileMenu from './MobileMenu';
import '../styles/Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <header className="header">
      <div className="header_top">
        <img  src={logo} className='logo' alt='Blogr logo'/>
        <button className="menu_btn" onClick={toggleMenu} aria-label="toggle menu button">
          <img src={isMenuOpen ? iconClose : iconHamburger} 
            alt='icon hamburger' 
            className='icon hamburger'
          />
        </button>
      </div>
      {isMenuOpen && <MobileMenu />}
      <div className="header_main">
        <h1>A modern publishing platform</h1>
        <p>Grow your audience and build your online brand</p>
        <div className="header_btns">
          <button>Start for Free</button>
          <button>Learn More</button>
        </div>
      </div>
    </header>
  )
}