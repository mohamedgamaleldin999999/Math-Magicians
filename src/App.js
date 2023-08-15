import React from 'react';
import Calculator from './components/calculator';
import './App.css';
import QuoteComponent from './components/quote';
import { Header } from './components/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<QuoteComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
