import React from 'react';
import "./Home.css";

const Home = () => {
  return (
    <div className='home'>
        <div className='slogan'>
            <h1>
                QUE CADA <span>CLICK</span> CUENTE
            </h1>
        </div>
        <div>
            <div className='container-objetivos'>
                <div className='items-objetivos'>
                    <h2>MISIÓN</h2>
                    <p>
                        Ofrecer soluciones creativas y personalizadas que cuenten historias, conecten emociones y construyan identidades de marca únicas.
                    </p>
                </div>
                <div className='items-objetivos'>
                    <h2>VISIÓN</h2>
                    <p>
                        Ser el estudio creativo que transforme ideas en realidades visuales memorables, impulsando marcas hacia horizontes innovadores.
                    </p>
                </div>
                <div className='items-objetivos'>
                    <h2>VALORES</h2>
                    <p>
                        Nuestra pasión por el diseño nos impulsa, nuestra búsqueda constante de excelencia nos define, y nuestra innovación nos lleva adelante. 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home