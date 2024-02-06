// Type Aliases :- allows us to create custom names for any type 

type stringOrNumber = string | number
type stringOrNumberArray = (string | number)[]

type userId = stringOrNumberArray

type Guitarist = {
    name?: string,
    active: boolean,
    albums: userId  // used type alias in another type alias
}

type UserId = stringOrNumber

const add = (a: UserId) => {
    return ` hello ${a}`
}

// Literal types 
type userType = 'Varun' | 'Sid' | 'Dev'

const userLogin = (user: userType) => {
    return `User (${user}) logged in successfully!`
}

console.log(userLogin('Sid'))

// let action : 'add' | 'sub'
type action = 'add' | 'sub'

const operation = (a: number, b: number, c: action) => {
    if (c === 'add') {
        return `The sum is ${a + b}.`
    } else {
        return `The remainder is ${a - b}`
    }
}

console.log(operation(2,4,"add"));

// type alias for functions 

type mathFunction = (a: number,b: number) => number // method 1 (type)
// interface mathFunction { // method 2 (interface)
//     (a:number, b:number) : number
// }

let multiply : mathFunction = (a,b) => {
    return a * b
}

console.log(multiply(21,2));

// optional params

const addAll = (a:number = 1, b:number, c?: number) => {  // a has default param value as 1
    if (typeof c !== 'undefined') {
        return a + b + c
    }
    return a + b 

}

console.log(addAll(1,2));

// rest operator (the rest of the params i.e. the last ones)

const total = (...nums : number[]) : number => {
    return nums.reduce((prev,curr) => prev + curr)
}

console.log(total(1,2,3,3));

// never type (for throwing errors)
const createError = (errMsg: string) : never => {
    throw new Error(errMsg)
}

const numberOrString = (value: number | string) : string  => {
    if (typeof value === 'number') return 'number'
    if (typeof value === 'string') return 'string'
    throw new Error('Unexpected input type')
}

console.log(numberOrString(21));
