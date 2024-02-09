"use strict";
// // Generics
const getFirstElement = (array) => array[0];
const firstNum = getFirstElement([1, 2, 3]);
const firstLet = getFirstElement(['a', 'b', 'c']);
const response = {
    data: {
        name: 'Varun',
        age: 21
    },
    isError: false,
};
const echo = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(checkBoolValue([2, 21]));
const base1 = {
    name: 'varun dhand',
    address: '21212'
};
const logLength = (arg) => {
    console.log(arg.length);
};
logLength('varun');
const processUser = (user) => {
    return user;
};
console.log(processUser({ id: 1, name: 'varun' }));
// console.log(processUser({name: 'varun'})); // throws error as the user doesnt have 'id'
// example 3
/**
 *
 * @param users type T user object with 'id' key
 * @param key type K represents keys of the user object i.e. its for the properties in 'users̉' array
 */
const getUsersProperty = (users, key) => {
    return users.map(user => user[key]);
};
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
];
console.log(getUsersProperty(usersArray, 'email'));
