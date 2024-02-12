"use strict";
// Utility types
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
