import React from 'react';
import Logo from '../../images/logoclick.png';
import './Header.css';

const Header = () => {

  // const toggle = () => {
  //   var checkBox = document.getElementById("check");
  //   var container = document.getElementById("cont-obj");
  //   if (checkBox.checked){
  //     container.style.display = "block";
  //   } else {
  //      container.style.display = "none";
  //   }
  // }

  const toggle = () => {
  const check = document.getElementById("check");
  if(check.checked === true) {
    check.checked = false
  } else {
    check.checked = true;
  }

}

  return (
    <header>
        <div>
            <div className='logo'>
                <img src={Logo} alt='logo espacio click' />
            </div>
            <nav>
              <input type='checkbox' className='toggle-menu' id='check'  />
              <div className="hamburger"></div>
              <ul className='menu'>
                <li><a href="#home" onClick={toggle}>home</a></li>
                <li><a href="#about"  onClick={toggle}>sobre nosotros</a></li>
                <li><a href="#services"  onClick={toggle}>estudio</a></li>
                <li><a href="#"  onClick={toggle}>contacto</a></li>
              </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header;