"use strict";
// method 1
// const anchor = document.querySelector('a');
// if (anchor){
//     console.log(anchor?.href);
// }
// method 2
// const anchor = document.querySelector('a')!;
// console.log(anchor.href);
// type casting
// const form = document.querySelector('form')!;
// console.log(form);
const form = document.querySelector('.new-item-form');
// console.log(form.children);
// inpust
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
