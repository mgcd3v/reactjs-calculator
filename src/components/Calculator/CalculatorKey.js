import React from 'react';
import { useCalculator } from 'contexts/Calculator/CalculatorContext';

const CalculatorKey = ({ className, keyChar }) => {
    const { events } = useCalculator();

    return (
        <button 
            className={`calculator-key ${className}`} 
            onClick={(e) => {
                events.doOnKeyClickActions(keyChar);
            }}
        >
            { keyChar }
        </button>
    );
};

export default CalculatorKey;