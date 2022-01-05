// Constants
const operatorChars = ['/', '*', '+', '-', '='];
const resetChars = ['AC', 'C'];
const signChars = ['±'];
const percChars = ['%'];

// Process functions
const getNumbersOnly = (value) => {
    return value.replaceAll(',', '');
};

const getAmountWithComma = (amount) => {
    const language = navigator.language || 'en-US';
    let amountWithComma = parseFloat(amount).toLocaleString(language, 
                                        {
                                            useGrouping: true,
                                            maximumFractionDigits: 6
                                        });

    const match = amount.match(/\.\d*?(0*)$/)
    
    if (match){
        amountWithComma += (/[1-9]/).test(match[0]) ? match[1] : match[0];
    }
    
    return amountWithComma;
};

const getSignedAmount = (amount, sign) => {
    return Math.abs(Number(amount)) * ((sign === '+')? 1 : -1);
};

const getAmountInPercent = (amount) => {
    return Number(amount) / 100;
};

export const getProcessedResult = (prevState, keyChar) => {
    const { result, valueOnDisplay, operator } = prevState;

    if(resetChars.includes(keyChar)){
        return null;
    }

    if(!operatorChars.includes(keyChar)){
        return result;
    }

    if(operator === null){
        return valueOnDisplay;
    }

    let newResult = 0;

    switch(operator){
        case '/':
            newResult = Number(result) / Number(valueOnDisplay);
            break;
        case '*':
            newResult = Number(result) * Number(valueOnDisplay);
            break;
        case '+':
            newResult = Number(result) + Number(valueOnDisplay);
            break;
        case '-':
            newResult = Number(result) - Number(valueOnDisplay);
            break;
        case '=':
            newResult = result;
            break;
        default:
    }

    return newResult;
};

export const getProcessedValueOnDisplay = (prevState, result, sign, keyChar) => {
    const { valueOnDisplay, isNewOperator } = prevState;

    if(operatorChars.includes(keyChar)){
        return result;
    }

    if(resetChars.includes(keyChar)){
        return 0;
    }

    if(signChars.includes(keyChar)){
        return getSignedAmount(valueOnDisplay, sign);
    }

    if(percChars.includes(keyChar)){
        return getAmountInPercent(valueOnDisplay);
    }

    const newValueOnDisplay = (Number(valueOnDisplay) === 0 || isNewOperator === true)? keyChar : getNumbersOnly(`${valueOnDisplay}${keyChar}`);

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

export const getProcessedSign = (sign, keyChar) => {
    if(!signChars.includes(keyChar)){
        return sign;
    }

    if(resetChars.includes(keyChar)){
        return '+';
    }

    return sign === '+'? '-' : '+';
};
