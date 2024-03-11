import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
        <div className='footer-container'>
            <div>
                <h3>Explorar</h3>
                <h4><a href='#home'>Home</a></h4>
                <h4><a href='#about'>Sobre nosotros</a></h4>
                <h4><a href='#services'>Estudio</a></h4>
                <h4><a href='#contact'>Contacto</a></h4>
            </div>
            <div>
              <h3>Dirección</h3>
                <h4><a href='https://maps.app.goo.gl/Q7XcaWFGNtmSaD9t7' target="_blank" rel='noreferrer'>Rivadavia 418, Coronel Suárez</a></h4>
            </div>
        </div>
    </footer>
  )
}

export default Footer