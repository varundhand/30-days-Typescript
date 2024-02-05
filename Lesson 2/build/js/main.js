"use strict";
// typescript infers this variable's type
let myFullName = 'Varun Dhand';
// explicit declaration of type
let myName = 'Varun Dhand';
let myAge = 20;
let isLoading;
myName = 'Varun';
myAge = 21;
isLoading = true;
// any data type
let song;
song = 21;
console.log(typeof (song));
// union type
let time;
let isActive;
time = '2 Clock';
isActive = true;
// making functions
const sum = (a, b) => {
    return a + b;
};
console.log(sum(1, '21'));
