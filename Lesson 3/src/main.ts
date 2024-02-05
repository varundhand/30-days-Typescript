// Annotating types in Arrays
let numbersArray: number[] = [1,2,3,4,5]
let mixedArray : (string|number|boolean)[] = ['a', 1, true] // union type array
let myTuple: [string, number, boolean] = ['Varun', 20, true] // tuple for strict positioning of types 

// numbersArray[0] =7

numbersArray.push(parseInt('12'))
numbersArray.unshift(0)

let age: number = 21

let ageName: number | string = 'varun'

ageName = age
// age = ageName // wont work because string cant be assigned to number type

console.log(ageName,age);

// Enums 
// used to store numeric values 
enum Color {
    Red=1  ,
    Green=2,
    Blue=3
}

let myColor = Color.Red
console.log('my color is:',myColor);


// Object
let myObj: object

myObj = []

myObj = numbersArray
console.log(typeof(myObj ));

const exampleObj = {
    firstName: 'Varun',
    age: 21,
}

exampleObj.firstName = 'Sid'
console.log(exampleObj);

// Annotating types in Objects

// type declaration method 1 (using 'type')
type Student = {
    name: string,
    eligibility?: boolean, // optional property
    albums: (string|number) []
}

let varun: Student ={
    name: 'Varun Dhand',
    eligibility: true,
    albums: ['30days',2121,'typescript'],
}

const greetStudent = ( student: Student) => {
    return `Hello there ${student.name}!`
}

console.log(greetStudent({name: 'Nathan', eligibility:true, albums: [1]}));
console.log(greetStudent(varun));

// type declaration method 2 (using interface)
interface Guitarist {
    name?: string, // name is optional 
    age: number,
    albums: (string|number) []
}

let johnMayer: Guitarist = {
    name: 'John Mayer',
    age: 40,
    albums: ['continuum'],
}

const greetGuitarist = (guitarist: Guitarist) => {
    return `Hi there ${guitarist.name?.toUpperCase()} !`
}

console.log(greetGuitarist(johnMayer));


// type declaration method 3
let student1 : {
    name1: string,
    eligibility: boolean,
    albums: (string|number) []
} 

student1 = {
    name1: 'Akash' ,
    eligibility: true,
    albums : [21,21,2122],
}

student1.eligibility = false

// console.log(typeof(student1));
