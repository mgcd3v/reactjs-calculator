import React from 'react';
import { useCalculator } from 'contexts/Calculator/CalculatorContext';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorKey from './CalculatorKey';

const Calculator = () => {
    const { state } = useCalculator();

    return (
        <div className="calculator">
            <div className="display">
                <CalculatorDisplay />
            </div>
            <div className="calculator-keypad keys">
                <div className="input-keys">
                    <div className="function-keys">
                        <CalculatorKey className="key-clear" keyChar={(state.valueOnDisplay === 0)? 'AC' : 'C'} />
                        <CalculatorKey className="key-sign" keyChar={'±'} />
                        <CalculatorKey className="key-percent" keyChar={'%'} />
                    </div>
                    <div className="digit-keys">
                        <CalculatorKey className="key-0" keyChar={'0'} />
                        <CalculatorKey className="key-dot" keyChar={'.'} />

                        <CalculatorKey className="key-1" keyChar={'1'} />
                        <CalculatorKey className="key-2" keyChar={'2'} />
                        <CalculatorKey className="key-3" keyChar={'3'} />

                        <CalculatorKey className="key-4" keyChar={'4'} />
                        <CalculatorKey className="key-5" keyChar={'5'} />
                        <CalculatorKey className="key-6" keyChar={'6'} />

                        <CalculatorKey className="key-7" keyChar={'7'} />
                        <CalculatorKey className="key-8" keyChar={'8'} />
                        <CalculatorKey className="key-9" keyChar={'9'} />
                    </div>
                </div>
                <div className="operator-keys">
                    <CalculatorKey className="key-divide" keyChar={'/'} />
                    <CalculatorKey className="key-multiply" keyChar={'*'} />
                    <CalculatorKey className="key-subtract" keyChar={'-'} />
                    <CalculatorKey className="key-add" keyChar={'+'} />
                    <CalculatorKey className="key-equals" keyChar={'='} />
                </div>
            </div>
        </div>
    );
};

export default Calculator;