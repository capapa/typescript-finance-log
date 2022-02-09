const me = {
    name: 'shaun',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('spent', amount);
        return amount;
    }
};
//console.log(me);
const greetPerson = (person) => {
    console.log('hello', person.name);
};
greetPerson(me);
import { Invoice } from './classes/invoice.js';
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => {
    //inv.sum = 10; inside/outside can't do this, because is readonly
    //console.log(inv.client, inv.details, inv.amount, inv.format()); - error - inv.details is private
    console.log(inv.client, inv.amount, inv.format());
});
