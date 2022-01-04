import React from 'react';
import { useCalculator } from 'contexts/Calculator/CalculatorContext';

const CalculatorDisplay = () => {
    const { state } = useCalculator();

    return (
        <div className="calculator-display">
            { state.valueOnDisplay }
        </div>
    );
};

export default CalculatorDisplay;