import React from 'react';

import "./Web.css";

const Web = () => {
  return (
    <div className='web'>
        <h2>
          PÁGINAS WEB
        </h2>
        <div className="web-cards">
          <div className='web-card'>
            <div>
              <h3>LANDING PAGE</h3>
              <p>
                La página web más asequible en el mercado. Organizamos toda la información de tu empresa en una única página.
              </p>
            </div>
            <button>Más información</button>
            
          </div>
          <div className='web-card'>
            <div>
            <h3>PÁGINA ECÓNOMICA</h3>
              <p>
                ¡Es la respuesta que has estado buscando! Ahora podrás tener tu propio sitio web. Esto te permitirá difundir tus productos y servicios a nivel nacional e internacional, abriendo un mundo de oportunidades para tu crecimiento.
              </p>
            </div>
            <button>Más información</button>
          </div>
          <div className='web-card'>
            <div>
              <h3>PÁGINA PERSONALIZADA</h3>
              <p>
                Si estás en busca de una página web única y personalizada, te brindamos la opción de un diseño a medida que refleje tus preferencias y requerimientos. Este servicio engloba la labor de un diseñador gráfico para crear el diseño de tu sitio web, y un programador web que lo convierte en realidad mediante tecnología de vanguardia.
              </p>
            </div>
            <button>Más información</button>
          </div>
          <div className='web-card'>
            <div>
              <h3>E-COMMERCE</h3>
              <p>
                Si deseas iniciar ventas en línea o potenciar tu sitio web como una herramienta efectiva para vender, esta opción es para ti. Te proporcionamos un sitio web con un carrito de compras que puedes gestionar tú mismo. Además, ofrecemos un servicio adicional que te permite sincronizar tu sitio web con Mercado Libre y la Tienda de Facebook para impulsar aún más tus ventas.
              </p>
            </div>
            <button>Más información</button>
          </div>
        </div>
    </div>
  )
}

export default Web