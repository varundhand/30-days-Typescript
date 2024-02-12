// Utility types

//! PARTIAL ---> properties become optional ?:
interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}

type PartialAssignment = Partial<Assignment>

const partialAssignment : PartialAssignment = {
    studentId: 'varun'
}

console.log(partialAssignment);

// example 1
const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>) : Assignment => {
    return {...assign, ...propsToUpdate}
}

const assignment1: Assignment = {
    studentId: 'varun019',
    title: 'math',
    grade: 7,
}

const assignGraded: Assignment = updateAssignment(assignment1,{grade: 10})
console.log(assignGraded);

//! REQUIRED ---> all properties are requried whether they be optional or compulsory 

const recordAssignment = (assign: Required<Assignment>) : Assignment => {
    // some operation
    return assign
}

//! READONLY ---> cant be modified

const assignVerified: Readonly<Assignment> = {...assignGraded, verified: true }

// assignVerified.grade = 9  // cant be done as it has Readonly utility type assigned
recordAssignment({...assignGraded, verified: false})

//! RECORD ---> Record<Key, Type> 
// basically used to make objects/arrays
// Key represents the keys of the resulting object 
// Type represents the type of values associated with corresponding key 

const colorHexas : Record<string,string> = {
    red: 'FF0000',
    green: '00FF00',
    blue: '0000FF',
}

// example 2

type Students = 'Sara' | 'Kelly'
type Grades = 'A' | 'B' | 'C' | 'D' | 'F'

const finalGrades: Record<Students,Grades> = {
    Sara: 'A',
    Kelly: 'C'
}

// example 3
interface GradesObject {
    assign1: number,
    assign2: number,
    assign3?: number
}

const gradeData: Record<Students,GradesObject> = {
    Sara: {
        assign1: 90,
        assign2: 95,
    },
    Kelly: {
        assign1: 70,
        assign2: 50,
        assign3: 80
    }
}

console.log(gradeData);

//! PICK ---> allows creation of new type by selecting only specified properties from existing type
// Pick<Type, Keys>
// Type is original type from which the properties are picked
// Keys are the union of the properties which must be included in new type 

type AssignmentResult = Pick<Assignment, 'studentId' | 'grade' >

const score :AssignmentResult = {
    studentId: 'V19',
    grade: 80,
}

//! OMIT ---> allows creation of new type by exclusion of some properties from an existing type 

type AssignPreview = Omit<Assignment, 'grade' | 'verified'>

const preview: AssignPreview = {
    studentId: 'V19',
    title: 'The Yeet',
    // verified: true // cant put this property as its omitted 
}

//! EXCLUDE ---> Exclude<Type, ExcludedUnion>

type Colors = 'Red' | 'Blue' | 'Green'
type NonRed = Exclude<Colors, 'Red'>

const EligibleColors : NonRed = 'Blue'

//! EXTRACT --->  Extract<Type, Union>

type Animal = 'Dog' | 'Cat' | 'Bird'
type DomesticAnimal = Extract<Animal, 'Dog' | 'Bird'>

//! NONNULLABLE ---> removes null and undefined from the type

type AllMembers = 'Varun' | 'Sid' | undefined | null
type NamesOnly = NonNullable<AllMembers>

//! RETURNTYPE ---> used to extract the return type of a function. 
// ReturnType<typeof function> // it takes function type as the parameter and returns the type of value returned by the function

// type newAssign = {title: string, pages: number}

const createNewAssign = (title: string, pages: number) => {
    return {title, pages}
}

type newAssign = ReturnType<typeof createNewAssign> // the return type gets automatically updated on updating the function

const jsAssign : newAssign =  {title: 'Async Js', pages: 10}

//! PARAMTERS ---> can derive the type of params

type AssignParams = Parameters<typeof createNewAssign>

const tsAssign: AssignParams = ['Utility types',7]

const tsAssign2: newAssign = createNewAssign(...tsAssign)
console.log(tsAssign2);

//! AWAITED

interface User {
    id: number,
    name:string,
    username: string,
    email: string,
}

const fetchUsers = async (): Promise<User[]> => {
    const data = await fetch ('https://jsonplaceholder.typicode.com/users/')
    .then(res => res.json())
    .catch(err => {if (err instanceof Error) console.log(err.message)})
    return data 
}

type FetchUserReturntype = Awaited<ReturnType<typeof fetchUsers>> // we need to wrap the returnType in Awaited in order to get the user array

fetchUsers().then(data => console.log(data)
)