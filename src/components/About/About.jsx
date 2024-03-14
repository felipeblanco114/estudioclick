import React from 'react';
import "./About.css";

const About = () => {
  return (
    <div className='about' id='about' data-aos="fade-up">
        <div>
            <h2>
                SOBRE NOSOTROS
            </h2>
            <p>
                Somos Click Estudio Creativo, una sinergia de tres amigos con formación en disciplinas complementarias, unidos por la pasión de transformar ideas en realidades impactantes. Desde nuestra oficina, donde la creatividad no conoce límites, nos dedicamos a ofrecer soluciones innovadoras en diseño, desarrollo web y estrategias de marketing digital. Creemos en el poder de la colaboración para crear marcas memorables y experiencias digitales que conecten.
            </p>
            <a href="#services">
                <button>
                    NUESTROS SERVICIOS
                </button>
            </a>
        </div>
    </div>
  )
}

export default About