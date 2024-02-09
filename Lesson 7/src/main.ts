// // Generics

const getFirstElement = <T> (array: T[]) : T => array[0]

const firstNum = getFirstElement([1,2,3])
const firstLet = getFirstElement(['a','b','c'])

// const input = document.querySelector<HTMLInputElement>('.input') 

// input?.value

//                   //
type ApiResponse <Data> = { // passing generic type as 'Data'
    data: Data,
    isError: boolean
}

type UserResponse =  ApiResponse <{name: string, age: number}> 

const response: UserResponse = {
    data: {
        name: 'Varun',
        age: 21
    },
    isError: false,
}


const echo = <T> (arg: T) : T => arg

const isObj = <T> (arg: T) : boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}

// console.log(isObj({name: 'varun'}));

//                               //

interface checkBoolean <T> {
    arg: T,
    is: boolean
}

const checkBoolValue = <T> (arg: T) : checkBoolean<T> => {
    if (Array.isArray(arg) && !arg.length){
        return {arg, is: false}
    } 
    if ( isObj(arg) && !Object.keys(arg as keyof T).length){
        return {arg, is: false  }
    }
    return {arg, is: !!arg}
}

console.log(checkBoolValue([2,21]));

// extends keyword --> helps to extend another interface 

interface Base  {
    name: string,
    age?: number
}

interface NewBase extends Base {
    address: string
}

const base1: NewBase = {
    name: 'varun dhand',
    address: '21212'
}

// example 1

interface LengthType {
    length: number
}

const logLength = <T extends LengthType>(arg: T) : void => {
    console.log(arg.length);
}

logLength('varun')

// example 2

interface HasId {
    id : number
}

const processUser = <T extends HasId> (user: T) : T => {
    return user 
}

console.log(processUser({id: 1, name: 'varun'}));
// console.log(processUser({name: 'varun'})); // throws error as the user doesnt have 'id'

// example 3

/**
 * 
 * @param users type T user object with 'id' key
 * @param key type K represents keys of the user object i.e. its for the properties in 'users̉' array 
 */
const getUsersProperty = <T extends HasId, K extends keyof T> (users: T[], key: K) : T[K][] => { // returns object with type T and its keys of type K
    return users.map( user => user[key])
}

const usersArray = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
        }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
        }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
        }
        }
]

console.log(getUsersProperty(usersArray, 'email'));
