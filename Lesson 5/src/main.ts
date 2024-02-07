type One = string 
type Two = string | number
type Three = 'hello'

// conversion to more specific or less specific types 
let a: One = 'hello'
let b= a as Two // less specific 
let c= a as Three // more specific as its assigned to a literal 

// using angle braces 
let d = <One> 'world'
let e = <string| number> 21

const addOrConcat = (a:number, b:number , c: 'add' | 'concat') : number | string => {
    if (c === 'add') return a + b
    // return '' + a + b 
    return a.toString().concat('',b.toString())
}

// Assertion: informing compiler about the type  
let myVal : string = addOrConcat(2,3,'concat') as string // we tell the compiler about the type 
let nextVal : string = addOrConcat(3,4,'add') as string //! Wrong 

// forced assertion
let number = 10 as unknown as string

const img = document.querySelector('img')! // we put bang(!) at the end to infer that the element is not null
const myImg = document.getElementById('#img') as HTMLImageElement
const nextImg = <HTMLImageElement> document.getElementById('#img') 

// img.src
// myImg.src
