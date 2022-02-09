// classes
class Invoice{
    client: string; // public is default modifier
    private details: string;
    public amount: number;
    readonly sum: number;

    constructor(c: string, d: string, a: number, s: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
        this.sum = s;
    }

    format() {
        //this.sum = 10; inside/outside can't do this, because is readonly
        return `${this.client} qwes $${this.amount} for ${this.details}`;
    }
}

class InvoiceSame{
    
     // in constructor explicity modifiers is required
    constructor(
        public client: string,
        private details: string,
        public amount: number,
        readonly sum: number,
    ) {}

    format() {
        //this.sum = 10; inside/outside can't do this, because is readonly
        return `${this.client} qwes $${this.amount} for ${this.details}`;
    }
}

const invOne = new Invoice('mario', 'work on the mario website', 250, 1000);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300, 1500);
    
console.log(invOne, invTwo);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
    //inv.sum = 10; inside/outside can't do this, because is readonly
    //console.log(inv.client, inv.details, inv.amount, inv.format()); - error - inv.details is private
    console.log(inv.client, inv.amount, inv.format());
})

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