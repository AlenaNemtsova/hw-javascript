class Calculator {
    constructor(x, y) {
        this.setX(x);
        this.setY(y);
    }

    isValidNum() {
        if (typeof num === 'number' && !isNaN(num)) {
            return !isNaN(num) && typeof num === 'number';
        }
    }

    setX(x) {
        if (!Calculator.isValidNum(x)) {
            throw new Error('x is not a number');
        }
        this.x = x;
    }

    setY(y) {
        if (!Calculator.isValidNum(y)) {
            throw new Error('y is not a number');
        }
        this.y = y;
    }

    logSum() {
        return this.x + this.y;
    }

    logMul() {
        return this.x * this.y;
    }

    logSub() {
        return this.x - this.y;
    }

    logDiv() {
        if (this.y === 0) {
            throw new Error(`You can't divide by 0`);
        }
        return this.x / this.y;
    }
}

const logSumRef = calculator.logSum;
console.log(logSumRef());