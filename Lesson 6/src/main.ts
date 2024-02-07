// Index Signatures 

interface TransactionObj {
    readonly [index: string] : number // readonly disables user from assigning another value
}

// interface TransactionObj {
//     Pizza: number,
//     travel: number,
//     job: number
// }

const allTransactions : TransactionObj = {
    Pizza: -10,
    travel: -20,
    job: 60
}

console.log(allTransactions.Pizza);
console.log(allTransactions['Pizza']);

let prop: string = 'Pizza'

console.log(allTransactions[prop]);

const todaysNet = (transactions: TransactionObj) : number => { // assigned index signature 
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction]
    }
    return total
}

console.log(todaysNet(allTransactions));

// allTransactions.Pizza = 21

//////////////////////////////////////////

interface Student  {
    // [key : string] : string|number|number[]|undefined// injecting index signature for the object type
    name: string,
    score: number,
    grades?: number[]
}

type studentType = keyof Student

const student: Student = {
    name: 'Varun',
    score: 9.41,
    grades: [1,2,3]
}

// console.log(student.yeet);

for ( const key in student) {
    console.log(`${key} : ${student[key as keyof Student]}`); // keyof is used to get the union type for all keys of a given type 
}

Object.keys(student).map((key, val) => {
    console.log(student[key as keyof typeof student])
})

const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`)
}

logStudentKey(student, 'grades')

///////////////////////////////////////////// 
// Utility type ---> RECORD

type Person = {
    name: string,
    age: number,
}

type PersonsRecord = Record<string, Person>

const people :PersonsRecord = {
    'people1' : {name: 'Varun', age: 21},
    'people2' : {name: 'Sid', age: 22}
}

console.log(people);

type Streams = 'salary' | 'bonus' | 'sidehustle'

type Incomes = Record<Streams, number> // we can provide literal type using RECORD 

const monthlyIncomes : Incomes = {
    salary: 100,
    bonus:20,
    sidehustle:80
}

for (const revenue in monthlyIncomes){
    console.log(`${revenue} ---> ${monthlyIncomes[revenue as keyof Incomes]}`);
    
}
