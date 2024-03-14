import React from 'react';
import Intro from '../Intro/Intro';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import About from '../About/About';

const Home = () => {
  return (
    <div>
        <Intro />
        <About />
        <Services />
        <Contact />
    </div>
  )
}

export default Home;