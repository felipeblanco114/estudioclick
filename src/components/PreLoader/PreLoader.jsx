import React, { useEffect } from 'react';
import Logo from '../../images/logo-png.png';
import { preLoaderAnim } from "../../animations";
import "./PreLoader.css";

const PreLoader = () => {

    useEffect(() => {
        preLoaderAnim();
    }, [])

  return (
    <div className='preloader'>
        <img src={Logo} alt='Logo de Click' />
    </div>
  )
}

export default PreLoader;