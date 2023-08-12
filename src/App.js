import React from 'react';
import Calculator from './components/calculator';
import './App.css'; // You can create this CSS file for global styles

function App() {
  return (
    <div className="app">
      <Calculator />
      <QuoteComponent />
    </div>
  );
}

export default App;