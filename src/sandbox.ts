let greet: Function;

// example 1
let greet1:() => void;

// example 2
let greet2: (a: string, b:string) => void;
greet = (name: string, greeting:string) => {
    console.log(`${name} ${greeting}`);
}

// example 3
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number,  numTwo: number, action: string) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    return numOne - numTwo;
}

// example 4
let logDetails: (obj: {name: string, age: number}) => void;

type person = {name: string, age: number};

logDetails = (human: person) => {
    console.log(`${human.name} is ${human.age} years old`);
}