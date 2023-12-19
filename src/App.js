import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import About from './pages/about';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route exact path='/ocean/home' element={<About/>} />
      <Route path="/ocean" element={<Navigate replace to="/ocean/home" />} />
      <Route path="/" element={<Navigate replace to="/ocean/home" />} />
    </Routes>
  </Router>
  );
}

export default App;
