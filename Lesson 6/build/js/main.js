"use strict";
// Index Signatures 
// interface TransactionObj {
//     Pizza: number,
//     travel: number,
//     job: number
// }
const allTransactions = {
    Pizza: -10,
    travel: -20,
    job: 60
};
console.log(allTransactions.Pizza);
console.log(allTransactions['Pizza']);
let prop = 'Pizza';
console.log(allTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(allTransactions));
const student = {
    name: 'Varun',
    score: 9.41,
    grades: [1, 2, 3]
};
// console.log(student.yeet);
for (const key in student) {
    console.log(`${key} : ${student[key]}`); // keyof is used to get the union type for all keys of a given type 
}
Object.keys(student).map((key, val) => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'grades');
const people = {
    'people1': { name: 'Varun', age: 21 },
    'people2': { name: 'Sid', age: 22 }
};
console.log(people);
const monthlyIncomes = {
    salary: 100,
    bonus: 20,
    sidehustle: 80
};
for (const revenue in monthlyIncomes) {
    console.log(`${revenue} ---> ${monthlyIncomes[revenue]}`);
}
