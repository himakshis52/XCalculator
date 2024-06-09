import * as React from 'react';
import "./styles.css"
import { useState } from 'react';

const Calculator = () => {

  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const appendValue = (value) => {
    setInput(prevInput => prevInput + value);
  };

  const clearResult = () => {
    setInput('');
    setOutput('');
  };

  const calculate = () => {
    try {
      if (input.trim() === '') {
          setOutput('Error');
          return;
      }

      let result = eval(input);
      if (isNaN(result)) {
          setOutput('NaN');
      } else if (!isFinite(result)) {
          setOutput('Infinity');
      } else {
          setOutput(result.toString());
      }
  } catch (error) {
      setOutput('Error');
  }
  };

    return(
        <div>
          <div className='input-output'>
            <h1>React Calculator</h1>
              <input type="text" className="result" value={input} readOnly />
              <h3>{output}</h3>
          </div>
          <div className='calculator-grid'>
            <button className='btn-spacing' onClick={() => appendValue('7')}>7</button>
            <button className='btn-spacing' onClick={() => appendValue('8')}>8</button>
            <button className='btn-spacing' onClick={() => appendValue('9')}>9</button>
            <button className='btn-spacing' onClick={() => appendValue('+')}>+</button>
            <button className='btn-spacing' onClick={() => appendValue('4')}>4</button>
            <button className='btn-spacing' onClick={() => appendValue('5')}>5</button>
            <button className='btn-spacing' onClick={() => appendValue('6')}>6</button>
            <button className='btn-spacing' onClick={() => appendValue('-')}>-</button>
            <button className='btn-spacing' onClick={() => appendValue('1')}>1</button>
            <button className='btn-spacing' onClick={() => appendValue('2')}>2</button>
            <button className='btn-spacing' onClick={() => appendValue('3')}>3</button>
            <button className='btn-spacing' onClick={() => appendValue('*')}>*</button>
            <button className='btn-spacing' onClick={clearResult}>C</button>
            <button className='btn-spacing' onClick={() => appendValue('0')}>0</button>
            <button className='btn-spacing' onClick={calculate}>=</button>
            <button className='btn-spacing' onClick={() => appendValue('/')}>/</button>
          </div>
        </div>
    )
}

export default Calculator;