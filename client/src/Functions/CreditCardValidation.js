import luhnCheck from './luhnAlgorithm'

function validate(values) {
    let errors = {};

    if (!values.cardNumber) {
        errors.cardNumber = 'Card number is required';
    } 
    else {
        const cardNumberWithoutSpaces = values.cardNumber.replace(/\s/g, '');
        if (!luhnCheck(cardNumberWithoutSpaces)) {
            errors.cardNumber = 'Invalid card number';
        }
    }

    const currDate = new Date();
    const year = currDate.getFullYear();
    const month = currDate.getMonth() + 1; 
    if(!values.expMM) {
        errors.expMM = 'Month is required';
    }
    if(values.expMM.length !== 2 && values.expMM >= month && values.expMM <=12) {
        errors.expMM = 'Month invalid';
    }

    if(values.expMM.length !== 4 && values.expMM >= year) {
        errors.expYY = 'Year invalid';
    }

    if(!values.cvv) {
        errors.cvv = 'CVV is required';
    }
    if(values.cvv.length !== 4 || values.cvv.length !== 4 )
        errors.cvv = 'CVV invalid'

    return errors;
}

export default validate
