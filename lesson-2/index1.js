Array.prototype.myFilter = function (callback, object) {
    object = this;
    const length = object.length;

    const filteredArray = [];

    for (let i = 0; i < length; i++) {
        const result = callback(object[i], i, object);

        if (result) {
            filteredArray.push(object[i]);
        }
    }

    return filteredArray;
}


//tests
const numbers = [12, 5, 8, 130, 44];
const filteredNumbers = numbers.myFilter((value) => value >= 10);
console.log(filteredNumbers);

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const filteredWords = words.myFilter((word) => word.length > 6);
console.log(filteredWords);