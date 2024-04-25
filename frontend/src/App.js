import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import TopProducts from './components/TopProducts';

function App() {
  return (<>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path='/products' element={<TopProducts />} />
    </Routes></>
  );
}

export default App;
