#!/usr/bin/node
//interpreter

// function divideby
function divideBy(firstNumber) {
    // ananymous function
    return function (secondNumber) {
        return secondNumber / firstNumber;
    };
}
// function addBy
function addBy(firstNumber) {
    // ananymous function
    return function (secondNumber) {
        return secondNumber + firstNumber;
    };
}
//create closures
const addBy100 = addBy(100);
const addBy1000 = addBy(1000);
const divideBy10 = divideBy(10);
const divideBy100 = divideBy(100);

console.log(addBy100(20));
console.log(divideBy10(20));
console.log(divideBy100(200));
console.log(addBy1000(20));