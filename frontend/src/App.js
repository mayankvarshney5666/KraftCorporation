import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import CurrentJobs from './Pages/CurrentJobs';
import Products from './Pages/Products';
import KraftPaper from './Pages/Product Pages/KraftPaper';

function App() {
  return (<>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about us" element={<AboutUs />} />
      <Route path='/products' element={<Products />} />
      <Route path="/contact us" element={<ContactUs />} />
      <Route path="/jobs" element={<CurrentJobs />} />
      <Route path="/current jobs" element={<CurrentJobs />} />
      <Route path="/kraft-paper" element={<KraftPaper />} />

    </Routes></>
  );
}

export default App;
