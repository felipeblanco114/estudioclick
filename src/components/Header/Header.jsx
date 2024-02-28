import React from 'react';
import Logo from '../../images/logoclick.png';
import './Header.css';

const Header = () => {
  return (
    <header>
        <div>
            <div className='logo'>
                <img src={Logo} alt='logo espacio click' />
            </div>
            <nav>
                <input type='checkbox' className='toggle-menu' />
                <div className="hamburger"></div>
                <ul className='menu'>
                  <li><a href="#">home</a></li>
                  <li><a href="#">sobre nosotros</a></li>
                  <li><a href="#">estudio</a></li>
                  <li><a href="#">contacto</a></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header;