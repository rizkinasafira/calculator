let prevNumber = '';
let currentNumber = '0';
let calculationOperator = '';
let decimalAdded = false;

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
};

const inputDecimal = () => {
    if (decimalAdded === false) {
        currentNumber += '.';
        decimalAdded = true;
    }
};

const updateScreen = (number) => {
    const calculatorScreen = document.querySelector('.calculator-screen');
    calculatorScreen.value = number;
};

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '0';
    decimalAdded = false;
};

const calculate = () => {
    let result = '';
    switch (calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            return;
    }
    currentNumber = result;
    calculationOperator = '';
};

const allClear = () => {
    prevNumber = '';
    currentNumber = '0';
    calculationOperator = '';
    decimalAdded = false;
};

const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
});

const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        inputOperator(event.target.value);
    });
});

const equalSign = document.querySelector('.equal-sign');
equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currentNumber);
});

const clearBtn = document.querySelector('.all-clear');
clearBtn.addEventListener('click', () => {
    allClear();
    updateScreen(currentNumber);
});

const decimal = document.querySelector('.decimal');
decimal.addEventListener('click', (event) => {
    inputDecimal();
    updateScreen(currentNumber);
});