import React from 'react';
import Calculator from './components/calculator';
import './App.css';

function App() {
  return (
    <div className="app">
      <Calculator />
      <QuoteComponent />
    </div>
  );
}

export default App;