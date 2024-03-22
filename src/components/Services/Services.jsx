import React from 'react';
import {Link} from 'react-router-dom';
import "./Services.css"

const Services = () => {
  return (
    <div className='services' id='services' data-aos="fade-up">
        <div className='container-services'>
            <h2>
                SERVICIOS
            </h2>
            <div className='services-list'>
              <h3><Link to='/diseño-grafico'>DISEÑO GRÁFICO</Link></h3>
              <h3><Link to='/paginas-web'>PÁGINAS WEB</Link></h3>
              <h3><Link to='/marketing'>MARKETING</Link></h3>
            </div>
            <p>
              En Click, estamos emocionados por lo que el futuro trae y ansiamos ser parte de tu próximo proyecto. Si estás buscando elevar tu marca y crear conexiones significativas con tu audiencia, estás en el lugar correcto.
            </p>
        </div>
    </div>
  )
}

export default Services