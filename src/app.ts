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

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// inpust
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
})