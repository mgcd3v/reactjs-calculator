import React from 'react';
import { useCalculator } from 'contexts/Calculator/CalculatorContext';
import AutoScalingText from '../Generic/AutoScalingText';

const CalculatorDisplay = () => {
    const { state } = useCalculator();

    return (
        <div className="calculator-display">
            <AutoScalingText text={state.valueOnDisplay} />
        </div>
    );
};

export default CalculatorDisplay;