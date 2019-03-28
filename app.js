/* jslint esversion:6 */

function add(a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a - b;
};

const multiply = (a, b) => a * b;
const log = (a) => console.log(`value of a is: ${a}`);
const sumar = add;
const AGE = 65;

65;
add;
var value = add(3, 5);
log;

log("Hello World");

function divide(a, b) {
    return a / b;
}

console.log(divide(8, 4, 3));
console.log(divide(8, 4));
console.log(divide(8));

console.log(AGE);
console.log(sumar('hello ', 'world!'));
console.log(add);
console.log(typeof add);
console.log(subtract(10, 7));
console.log(subtract);
console.log(typeof multiply);
console.log(multiply(3,5));
console.log(multiply);

return;