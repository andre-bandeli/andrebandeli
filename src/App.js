
import './App.css';
import { Route, Routes, useLocation } from "react-router-dom"
import React, { useEffect } from 'react';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Academic from './pages/Academic/Academic';
import Contact from './pages/Contact/Contact';


function App() {

  const location = useLocation();

  useEffect(() => {
    let title = '';
    switch (location.pathname) {
      case '/about':
        title = 'About';
        break;
      case '/projects':
        title = 'Projects';
        break;
      case '/contact':
        title = 'Contact';
        break;
      case '/academic':
        title = 'Academic';
        break;
      default:
        title = 'André Bandeli';
        break;
    }
    document.title = title;
  }, [location]);

  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/academic" element={<Academic />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
