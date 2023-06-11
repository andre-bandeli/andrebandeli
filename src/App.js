
import './App.css';
import { Route, Routes, useLocation } from "react-router-dom"
import React, { useEffect } from 'react';

import Home from './pages/Home/Home';
import About from './pages/About/About';


function App() {

  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
