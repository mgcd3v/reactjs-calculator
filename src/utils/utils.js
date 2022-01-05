export const numberify = (value) => {
    return Number(getNumbersOnly(value));
};

export const getNumbersOnly = (value) => {
    return (value === null)? "0" : value.toString().replaceAll(',', '');
};

export const getAmountWithComma = (amount) => {
    const language = navigator.language || 'en-US';
    let amountWithComma = numberify(amount).toLocaleString(language, 
                                        {
                                            useGrouping: true,
                                            maximumFractionDigits: 6
                                        });

    const match = amount.toString().match(/\.\d*?(0*)$/)
    
    if (match){
        amountWithComma += (/[1-9]/).test(match[0]) ? match[1] : match[0];
    }
    
    return amountWithComma;
};

export const getSignedAmount = (amount) => {
    return amount? numberify(amount) * -1 : amount;
};

export const getAmountInPercent = (amount) => {
    return numberify(amount) / 100;
};