Object.prototype[Symbol.iterator] = function () {
    let current = this.from;
    let last = this.to;

    return {
        next() {
            if (Number.isFinite(current) || Number.isFinite(last) || current == undefined || last == undefined) {
                throw (new Error("Error!"));
            }

            if (current <= last) {

                return {
                    done: false,
                    value: current++
                }
            } else {
                return {
                    done: true
                };
            }
        }
    };
}


//Tests
const myIterable1 = { from: 1, to: 4 };
for (let item of myIterable1) {
    console.log(item); // 1, 2, 3, 4
}

const myIterable2 = { from: 'aaa', to: 4 };
for (let item of myIterable2) { // Error!
    console.log(item);
}

const myIterable3 = {};
for (let item of myIterable3) { // Error!
    console.log(item);
}