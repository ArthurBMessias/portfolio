import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ProviderContext from './Context/ProviderContext';
import About from './Pages/About';
import Contact from './Pages/Contact';
import './App.css';

function App() {
  return (
    <ProviderContext>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ProviderContext>
  );
}

export default App;
