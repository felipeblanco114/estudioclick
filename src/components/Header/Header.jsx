import React from 'react';
import Logo from '../../images/logo-png.png';
import { HashLink } from 'react-router-hash-link';
import './Header.css';

const Header = () => {

  const toggle = () => {
  const check = document.getElementById("check");
  if(check.checked === true) {
    check.checked = false
  }
}

  return (
    <header>
        <div>
            <div className='logo'>
              <HashLink to="/#home" smooth onClick={toggle}>
                <img src={Logo} alt='logo espacio click' className='logo-header' />
              </HashLink>
            </div>
            <nav>
              <input type='checkbox' className='toggle-menu' id='check'  />
              <div className="hamburger"></div>
              <ul className='menu'>
                <li><HashLink to="/#home" smooth onClick={toggle}>home</HashLink></li>
                <li><HashLink to="/#about" smooth onClick={toggle}>sobre nosotros</HashLink></li>
                <li><HashLink to="/#services" smooth onClick={toggle}>estudio</HashLink></li>
                <li><HashLink to="/#contact" smooth onClick={toggle}>contacto</HashLink></li>
              </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header;