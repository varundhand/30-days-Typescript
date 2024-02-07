"use strict";
// conversion to more specific or less specific types 
let a = 'hello';
let b = a; // less specific 
let c = a; // more specific as its assigned to a literal 
// using angle braces 
let d = 'world';
let e = 21;
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    // return '' + a + b 
    return a.toString().concat('', b.toString());
};
// Assertion: informing compiler about the type  
let myVal = addOrConcat(2, 3, 'concat'); // we tell the compiler about the type 
let nextVal = addOrConcat(3, 4, 'add'); //! Wrong 
// forced assertion
let number = 10;
const img = document.querySelector('img'); // we put bang(!) at the end to infer that the element is not null
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img');
// img.src
// myImg.src
