import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import TopProducts from './components/TopProducts';
import CurrentJobs from './Pages/CurrentJobs';

function App() {
  return (<>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about us" element={<AboutUs />} />
      <Route path='/products' element={<TopProducts />} />
      <Route path="/contact us" element={<ContactUs />} />
      <Route path="/jobs" element={<CurrentJobs />} />
      <Route path="/current jobs" element={<CurrentJobs />} />
    </Routes></>
  );
}

export default App;
