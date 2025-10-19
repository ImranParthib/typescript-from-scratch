// variables

let helloWorld = "Hello World!";
// TypeScript infers: string
console.log(helloWorld);

// functions

function add(a: number, b: number) {
    return a + b;
}

console.log(add(12, 13))

// Arrow Function also same

const divide = (c: number, d: number) => {
    return c / d;
}

console.log(divide(34, 12))


//Arrays


let fruits = ["Apple", "Banana", "Mango", "Orange"];
// TypeScript infers: string[]
console.log(fruits);

// Objects

let person = {
    name: "Jarif Hossain",
    age: 30,
    isEmployed: true
};
// TypeScript infers: { name: string; age: number; isEmployed: boolean; }
console.log(person);

// Union Types
let userStatus = "active"; // inferred as string
const role = "admin";  // inferred as the literal type "admin"
