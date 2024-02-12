"use strict";
// Utility types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const partialAssignment = {
    studentId: 'varun'
};
console.log(partialAssignment);
// example 1
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assignment1 = {
    studentId: 'varun019',
    title: 'math',
    grade: 7,
};
const assignGraded = updateAssignment(assignment1, { grade: 10 });
console.log(assignGraded);
//! REQUIRED ---> all properties are requried whether they be optional or compulsory 
const recordAssignment = (assign) => {
    // some operation
    return assign;
};
//! READONLY ---> cant be modified
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
// assignVerified.grade = 9  // cant be done as it has Readonly utility type assigned
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: false }));
//! RECORD ---> Record<Key, Type> 
// basically used to make objects/arrays
// Key represents the keys of the resulting object 
// Type represents the type of values associated with corresponding key 
const colorHexas = {
    red: 'FF0000',
    green: '00FF00',
    blue: '0000FF',
};
const finalGrades = {
    Sara: 'A',
    Kelly: 'C'
};
const gradeData = {
    Sara: {
        assign1: 90,
        assign2: 95,
    },
    Kelly: {
        assign1: 70,
        assign2: 50,
        assign3: 80
    }
};
console.log(gradeData);
const score = {
    studentId: 'V19',
    grade: 80,
};
const preview = {
    studentId: 'V19',
    title: 'The Yeet',
    // verified: true // cant put this property as its omitted 
};
const EligibleColors = 'Blue';
//! RETURNTYPE ---> used to extract the return type of a function. 
// ReturnType<typeof function> // it takes function type as the parameter and returns the type of value returned by the function
// type newAssign = {title: string, pages: number}
const createNewAssign = (title, pages) => {
    return { title, pages };
};
const jsAssign = { title: 'Async Js', pages: 10 };
const tsAssign = ['Utility types', 7];
const tsAssign2 = createNewAssign(...tsAssign);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users/')
        .then(res => res.json())
        .catch(err => { if (err instanceof Error)
        console.log(err.message); });
    return data;
});
fetchUsers().then(data => console.log(data));
