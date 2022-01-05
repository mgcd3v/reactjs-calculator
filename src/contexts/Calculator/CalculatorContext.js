import React, { useContext, useState } from 'react';
import { 
    getProcessedResult,
    getProcessedValueOnDisplay,
    getProcessedOperator,
    getProcessedIsNewOperator,
    getProcessedSign,
} from './CalculatorContextCustomHooks';

const CalculatorContext = React.createContext();

export const useCalculator = () => {
    return useContext(CalculatorContext);
};

export const CalculatorProvider = ({ children }) => {
    // State
    const [state, setState] = useState({
        result: null,
        valueOnDisplay: '0',
        operator: null,
        isNewOperator: false,
    });

    // Events
    const events = {
        doOnKeyClickActions: (keyChar) => {
            setState(prevState => {
                const result = getProcessedResult(prevState, keyChar);
                const operator = getProcessedOperator(prevState.operator, keyChar);
                const isNewOperator = getProcessedIsNewOperator(keyChar);
                const valueOnDisplay = getProcessedValueOnDisplay(prevState, result, keyChar);
                
                return {
                    ...prevState,
                    result,
                    valueOnDisplay,
                    operator,
                    isNewOperator,
                }
            });
        },
    };

    return (
        <CalculatorContext.Provider value={{ state, events }}>
            { children }
        </CalculatorContext.Provider>
    );
};

