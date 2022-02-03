"use strict";
var message = 'message';
console.log(message);
var strArray = ['test', 'hi', 'ririri'];
console.log(strArray);
var testNumberArray = [1, 2, 3];
console.log(testNumberArray);
var done = true;
testNumberArray.push(2);
var mayBeUndefined = undefined;
mayBeUndefined = 'my';
var color = 'red';
color = 'red';
console.log(color);
function sum(x, y) {
    return x + y;
}
sum(1, 2);
function sumArray(numbers) {
    return numbers.reduce(function (acc, current) { return acc + current; }, 0);
}
var total = sumArray([1, 2, 3, 4, 5]);
console.log(total);
