//Task 1
console.log(Boolean([]) && [] == false && [] * []);

//Task 2
function numToBinary() {
    const num = prompt('Input number', '');

    return alert((num >>> 0).toString(2));
    // return alert(num.toString(2));
}

numToBinary();