// typescript infers this variable's type
let myFullName = 'Varun Dhand'

// explicit declaration of type
let myName: string = 'Varun Dhand'
let myAge: number = 20
let isLoading: boolean

myName = 'Varun'
myAge = 21
isLoading = true

// any data type
let song: any 

song = 21

console.log(typeof(song))

// union type
let time: number | string
let isActive: number| boolean

time = '2 Clock'
isActive = true

// making functions
const sum = (a:number,b:string) => {
    return a + b
}

console.log(sum(1 ,'21'))

// regular expression: regExp type
let re: RegExp = /\w+/g

