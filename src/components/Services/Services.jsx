import React from 'react';
import { HashLink } from 'react-router-hash-link';
import "./Services.css"

const Services = () => {
  return (
    <div className='services' id='services'>
        <div className='container-services'>
            <h2>
                SERVICIOS
            </h2>
            <div className='services-list'>
              <h3><HashLink to='/diseño-grafico#top'>DISEÑO GRÁFICO</HashLink></h3>
              <h3><HashLink to='/paginas-web#top'>PÁGINAS WEB</HashLink></h3>
              <h3><HashLink to='/marketing#top'>MARKETING</HashLink></h3>
            </div>
            <p>
              En Click, estamos emocionados por lo que el futuro trae y ansiamos ser parte de tu próximo proyecto. Si estás buscando elevar tu marca y crear conexiones significativas con tu audiencia, estás en el lugar correcto.
            </p>
        </div>
    </div>
  )
}

export default Services