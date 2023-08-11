import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate'; // Import the calculate function

function Calculator() {
  const [calcState, setCalcState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    const newState = calculate(calcState, buttonName);
    setCalcState(newState);
  };

  return (
    <div className="calculator">
      <div className="result">{calcState.next || calcState.total || '0'}</div>
      <div className="btns">
        <div className="row">
          <button className="btn" type="button" onClick={() => handleButtonClick('AC')}>AC</button>
          <button className="btn" type="button" onClick={() => handleButtonClick('+/-')}>+/-</button>
          <button className="btn" type="button" onClick={() => handleButtonClick('%')}>%</button>
          <button className="btn" type="button" onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div className="row">
          <button className="btn" type="button" onClick={() => handleButtonClick('7')}>7</button>
          <button className="btn" type="button" onClick={() => handleButtonClick('8')}>8</button>
          <button className="btn" type="button" onClick={() => handleButtonClick('9')}>9</button>
          <button className="btn" type="button" onClick={() => handleButtonClick('x')}>*</button>
        </div>
        <div className="row">
          <button className="btn" type="button" onClick={() => handleButtonClick('4')}>4</button>
          <button className="btn" type="button" onClick={() => handleButtonClick('5')}>5</button>
          <button className="btn" type="button" onClick={() => handleButtonClick('6')}>6</button>
          <button className="btn" type="button" onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div className="row">
          <button className="btn" type="button" onClick={() => handleButtonClick('1')}>1</button>
          <button className="btn" type="button" onClick={() => handleButtonClick('2')}>2</button>
          <button className="btn" type="button" onClick={() => handleButtonClick('3')}>3</button>
          <button className="btn" type="button" onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div className="row">
          <button className="btn zero" type="button" onClick={() => handleButtonClick('0')}>0</button>
          <button className="btn" type="button" onClick={() => handleButtonClick('.')}>.</button>
          <button className="btn" type="button" onClick={() => handleButtonClick('=')}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
