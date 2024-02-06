"use strict";
// Type Aliases :- allows us to create custom names for any type 
const add = (a) => {
    return ` hello ${a}`;
};
const userLogin = (user) => {
    return `User (${user}) logged in successfully!`;
};
console.log(userLogin('Sid'));
const operation = (a, b, c) => {
    if (c === 'add') {
        return `The sum is ${a + b}.`;
    }
    else {
        return `The remainder is ${a - b}`;
    }
};
console.log(operation(2, 4, "add"));
// interface mathFunction { // method 2 (interface)
//     (a:number, b:number) : number
// }
let multiply = (a, b) => {
    return a * b;
};
console.log(multiply(21, 2));
// optional params
const addAll = (a = 1, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
console.log(addAll(1, 2));
// rest operator (the rest of the params i.e. the last ones)
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
console.log(total(1, 2, 3, 3));
// never type (for throwing errors)
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const numberOrString = (value) => {
    if (typeof value === 'number')
        return 'number';
    if (typeof value === 'string')
        return 'string';
    throw new Error('Unexpected input type');
};
console.log(numberOrString(21));
