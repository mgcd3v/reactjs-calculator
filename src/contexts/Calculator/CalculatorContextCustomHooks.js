import {
    numberify,
    getNumbersOnly,
    getAmountWithComma,
    getSignedAmount,
    getAmountInPercent,
} from '../../utils/utils';

// Constants
const operatorChars = ['/', '*', '+', '-', '='];
const resetChars = ['AC', 'C'];
const signChars = ['±'];
const percChars = ['%'];

// Process functions
export const getProcessedResult = (prevState, keyChar) => {
    const { result, valueOnDisplay, operator } = prevState;

    if(resetChars.includes(keyChar)){
        return null;
    }

    if(signChars.includes(keyChar)){
        return getSignedAmount(result);
    }

    if(percChars.includes(keyChar)){
        return getAmountInPercent(result);
    }

    if(!operatorChars.includes(keyChar)){
        return numberify(result);
    }

    if(operator === null){
        return numberify(valueOnDisplay);
    }

    let newResult = 0;

    switch(operator){
        case '/':
            newResult = numberify(result) / numberify(valueOnDisplay);
            break;
        case '*':
            newResult = numberify(result) * numberify(valueOnDisplay);
            break;
        case '+':
            newResult = numberify(result) + numberify(valueOnDisplay);
            break;
        case '-':
            newResult = numberify(result) - numberify(valueOnDisplay);
            break;
        case '=':
            newResult = numberify(result);
            break;
        default:
    }

    return newResult;
};

export const getProcessedValueOnDisplay = (prevState, result, keyChar) => {
    const { valueOnDisplay, isNewOperator } = prevState;

    if(resetChars.includes(keyChar)){
        return "0";
    }

    if(operatorChars.includes(keyChar)){
        return getAmountWithComma(result ?? valueOnDisplay);
    }

    if(signChars.includes(keyChar)){
        return getSignedAmount(valueOnDisplay).toString();
    }

    if(percChars.includes(keyChar)){
        return getAmountInPercent(valueOnDisplay);
    }

    const newValueOnDisplay = (isNewOperator === true)? (keyChar === '.')? `${'0'}${keyChar}` : keyChar : getNumbersOnly(`${valueOnDisplay}${keyChar}`);

    return getAmountWithComma(newValueOnDisplay);
};

export const getProcessedOperator = (operator, keyChar) => {
    
    if(resetChars.includes(keyChar)){
        return null;
    }

    if(!operatorChars.includes(keyChar)){
        return operator;
    }

    return keyChar;
};

export const getProcessedIsNewOperator = (keyChar) => {
    return operatorChars.includes(keyChar);
};
