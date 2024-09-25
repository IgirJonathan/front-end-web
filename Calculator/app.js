class Calculator {

    constructor() {
        this.screenValue = '';
        this.firstOperand = null;
        this.secondOperand = null;
        this.operator = null;
    }

    appendNumber = (number) => {
        this.screenValue += number;
        this.updateScreen();
    };

    chooseOperator = (operator) => {
        if (this.firstOperand === null) {
            this.firstOperand = parseFloat(this.screenValue);
            this.operator = operator;
            this.screenValue = '';
        } else if (this.operator) {
            this.secondOperand = parseFloat(this.screenValue);
            this.calculate();
            this.firstOperand = parseFloat(this.screenValue);
            this.operator = operator;
            this.screenValue = '';
        }
    };

    calculate = () => {
        if (this.firstOperand === null || this.operator === null) return;
        this.secondOperand = parseFloat(this.screenValue);
        this.screenValue = this.operate().toString();
        this.firstOperand = null;
        this.secondOperand = null;
        this.operator = null;
        this.updateScreen();
    };

    operate = () => {
        switch (this.operator) {
            case '+':
                return this.firstOperand + this.secondOperand;
            case '-':
                return this.firstOperand - this.secondOperand;
            case '*':
                return this.firstOperand * this.secondOperand;
            case '/':
                return this.firstOperand / this.secondOperand;
            default:
                return '';
        }
    };

    clear = () => {
        this.screenValue = '';
        this.firstOperand = null;
        this.secondOperand = null;
        this.operator = null;
        this.updateScreen();
    };

    updateScreen = () => {
        const screen = document.querySelector('#calculator-screen');
        screen.value = this.screenValue;
    };
}

const calculator = new Calculator();

document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.value;
        if (value === 'clear') {
            calculator.clear();
        } else if (value === '=') {
            calculator.calculate();
        } else if (['+', '-', '*', '/'].includes(value)) {
            calculator.chooseOperator(value);
        } else {
            calculator.appendNumber(value);
        }
    });
});
