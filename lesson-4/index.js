class Calculator {
    constructor(numX, numY) {
        this.setX(numX);
        this.setY(numY);
    }

    static isValidNum(num) {
        return !isNaN(num) && typeof num === 'number' && num !== Infinity && num !== -Infinity;
    }

    setX(numX) {
        if (!Calculator.isValidNum(numX)) {
            throw new Error('First value is not a number');
        }
        this.numX = numX;
    }

    setY(numY) {
        if (!Calculator.isValidNum(numY)) {
            throw new Error('Second value is not a number');
        }
        this.numY = numY;
    }

    logSum = () => {
        return this.numX + this.numY;
    }

    logMul = () => {
        return this.numX * this.numY;
    }

    logSub = () => {
        return this.numX - this.numY;
    }

    logDiv = () => {
        if (this.numY === 0) {
            throw new Error(`You can't divide by 0`);
        }
        return this.numX / this.numY;
    }
}

const calculator = new Calculator(1, 2);
const logSumRef = calculator.logSum;
const logMulRef = calculator.logMul;
const logSubRef = calculator.logSub;
const loglogDivRef = calculator.logDiv;

console.log(logSumRef());
console.log(logMulRef());
console.log(logSubRef());
console.log(loglogDivRef());