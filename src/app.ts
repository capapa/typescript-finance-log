import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListFormatter } from "./classes/ListFormatter.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inpust
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// ul
const list = document.querySelector('ul')!;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc:  HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    const lf = new ListFormatter(list);

    lf.render(doc, type.value, 'start');

})


// ENUM
enum ResourceType  { BOOK, AUTHOR, FILM, DIRECTOR, PERSON };

// GENERICS
const addID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addID({name: 'yoshi', age: 28});
//let docTwo = addID('hello');

console.log(docOne.name);

interface Resource<T> {
    uid: number,
    name: string,
    data: T
};

const docThree: Resource<object> = {
    uid: ResourceType.BOOK,
    name: 'shaun',
    data: {name: 'shaun'}
}

const docFour: Resource<string[]> ={
    uid: ResourceType.PERSON,
    name: 'shopping list',
    data: ['bread', 'milk', 'toilet roll']
}

console.log(docFour);