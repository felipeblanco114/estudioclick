import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home.jsx';
import Footer from './components/Footer/Footer';
import AOS from 'aos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'aos/dist/aos.css';
import './App.css';


function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
