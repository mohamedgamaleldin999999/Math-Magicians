import React from 'react';
import Calculator from './components/calculator';
import './App.css';
import QuoteComponent from './components/quote';
import { Header } from './components/header';

function App() {
  return (
    <div className="app">
      <Header />
      <Calculator />
      <QuoteComponent />
    </div>
  );
}

export default App;
