import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home.jsx';
import Footer from './components/Footer/Footer';
import Marketing from "./components/Marketing/Marketing.jsx";
import Web from "./components/Web/Web.jsx";
import Design from "./components/Design/Design.jsx";
import PreLoader from "./components/PreLoader/PreLoader.jsx";
import AOS from 'aos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';


function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <PreLoader />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path="/paginas-web" element={<Web />}/>
        </Routes>
        <Routes>
          <Route exact path="/marketing" element={<Marketing />}/>
        </Routes>
        <Routes>
          <Route exact path="/diseño-grafico" element={<Design />}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
