import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListFormatter } from "./classes/ListFormatter.js";
const form = document.querySelector('.new-item-form');
// inpust
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// ul
const list = document.querySelector('ul');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    const lf = new ListFormatter(list);
    lf.render(doc, type.value, 'start');
});
const addID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addID({ name: 'yoshi', age: 28 });
//let docTwo = addID('hello');
console.log(docOne.name);
;
const docThree = {
    uid: 1,
    name: 'shaun',
    data: { name: 'shaun' }
};
const docFour = {
    uid: 2,
    name: 'shopping list',
    data: ['bread', 'milk', 'toilet roll']
};
console.log(docFour);
