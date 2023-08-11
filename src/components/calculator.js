import React from 'react';
import './calculator.css';

function Calculator() {
  return (
    <div className="calculator">
      <div className='result'>0</div>
      <div className='btns'>
        <div className='row'>
          <button className='btn'>AC</button>
          <button className='btn'>+/-</button>
          <button className='btn'>%</button>
          <button className='btn'>+</button>
        </div>
        <div className='row'>
          <button className='btn'>7</button>
          <button className='btn'>8</button>
          <button className='btn'>9</button>
          <button className='btn'>*</button>
        </div>
        <div className='row'>
          <button className='btn'>4</button>
          <button className='btn'>5</button>
          <button className='btn'>6</button>
          <button className='btn'>-</button>
        </div>
        <div className='row'>
          <button className='btn'>1</button>
          <button className='btn'>2</button>
          <button className='btn'>3</button>
          <button className='btn'>+</button>
        </div>
        <div className='row'>
          <button className='btn zero'>0</button>
          <button className='btn'>.</button>
          <button className='btn'>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
