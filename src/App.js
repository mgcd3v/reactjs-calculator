import React from 'react';
import { CalculatorProvider } from 'contexts/Calculator/CalculatorContext';
import Calculator from 'components/Calculator/Calculator';
import './App.css';

const App = () => {
  return (
    <div id="wrapper">
      <div id="app">
        <CalculatorProvider>
          <Calculator />
        </CalculatorProvider>
      </div>
    </div>
  );
}

export default App;