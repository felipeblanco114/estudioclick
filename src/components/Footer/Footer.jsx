import React from 'react';
import './Footer.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Footer = () => {
  return (
    <footer>
        <div className='footer-container'>
            <div className='footer-list'>
                <h3>Explorar</h3>
                <h4><a href='#home'>Home</a></h4>
                <h4><a href='#about'>Sobre nosotros</a></h4>
                <h4><a href='#services'>Estudio</a></h4>
                <h4><a href='#contact'>Contacto</a></h4>
            </div>
            <div className='footer-list'>
              <h3>Dirección</h3>
                <h4><a href='https://maps.app.goo.gl/Q7XcaWFGNtmSaD9t7' target="_blank" rel='noreferrer'>Rivadavia 418, Coronel Suárez</a></h4>
            </div>
            <div className='footer-list'>
              <h3>Contacto</h3>
              <a href='https://wa.me/542926462675' target='_blank' rel='noreferrer'>
                <div>
                  <WhatsAppIcon />
                  <h4>2926462675</h4>
                </div>
              </a>
              <a href='https://www.instagram.com/estudioclickkk' target='_blank' rel='noreferrer'>
                <div>
                  <InstagramIcon />
                  <h4>estudioclickkk</h4>
                </div>
              </a>
              <a href='mailto:estudioclick418@gmail.com'>
                <div>
                  <MailOutlineIcon />
                  <h4>estudioclick418@gmail.com</h4>
                </div>
              </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer