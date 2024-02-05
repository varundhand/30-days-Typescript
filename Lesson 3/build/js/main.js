"use strict";
// Annotating types in Arrays
let numbersArray = [1, 2, 3, 4, 5];
let mixedArray = ['a', 1, true]; // union type array
let myTuple = ['Varun', 20, true]; // tuple for strict positioning of types 
// numbersArray[0] =7
numbersArray.push(parseInt('12'));
numbersArray.unshift(0);
let age = 21;
let ageName = 'varun';
ageName = age;
// age = ageName // wont work because string cant be assigned to number type
console.log(ageName, age);
// Enums 
// used to store numeric values 
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
let myColor = Color.Red;
console.log('my color is:', myColor);
// Object
let myObj;
myObj = [];
myObj = numbersArray;
console.log(typeof (myObj));
const exampleObj = {
    firstName: 'Varun',
    age: 21,
};
exampleObj.firstName = 'Sid';
console.log(exampleObj);
let varun = {
    name: 'Varun Dhand',
    eligibility: true,
    albums: ['30days', 2121, 'typescript'],
};
const greetStudent = (student) => {
    return `Hello there ${student.name}!`;
};
console.log(greetStudent({ name: 'Nathan', eligibility: true, albums: [1] }));
console.log(greetStudent(varun));
let johnMayer = {
    name: 'John Mayer',
    age: 40,
    albums: ['continuum'],
};
const greetGuitarist = (guitarist) => {
    var _a;
    return `Hi there ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()} !`;
};
console.log(greetGuitarist(johnMayer));
// type declaration method 3
let student1;
student1 = {
    name1: 'Akash',
    eligibility: true,
    albums: [21, 21, 2122],
};
student1.eligibility = false;
// console.log(typeof(student1));
