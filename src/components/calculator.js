import React from 'react';
import './calculator.css';
import calculate from './logic/calculate';

function Calculator() {
  const [calcState, setCalcState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const [displayValue, setDisplayValue] = useState('0');

  const handleButtonClick = (buttonName) => {
    const newState = calculate(calcState, buttonName);
    setCalcState(newState);

    if (newState.total !== null) {
      setDisplayValue(newState.total);
    } else if (newState.next !== null) {
      setDisplayValue(newState.next);
    } else {
      setDisplayValue('0');
    }
  };

  return (
    <div className="calculator">
      <div className="result">0</div>
      <div className="btns">
        <div className="row">
          <button className="btn" type="button">AC</button>
          <button className="btn" type="button">+/-</button>
          <button className="btn" type="button">%</button>
          <button className="btn" type="button">+</button>
        </div>
        <div className="row">
          <button className="btn" type="button">7</button>
          <button className="btn" type="button">8</button>
          <button className="btn" type="button">9</button>
          <button className="btn" type="button">*</button>
        </div>
        <div className="row">
          <button className="btn" type="button">4</button>
          <button className="btn" type="button">5</button>
          <button className="btn" type="button">6</button>
          <button className="btn" type="button">-</button>
        </div>
        <div className="row">
          <button className="btn" type="button">1</button>
          <button className="btn" type="button">2</button>
          <button className="btn" type="button">3</button>
          <button className="btn" type="button">+</button>
        </div>
        <div className="row">
          <button className="btn zero" type="button">0</button>
          <button className="btn" type="button">.</button>
          <button className="btn" type="button">=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
