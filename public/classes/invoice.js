// classes
export class Invoice {
    // in constructor explicity modifiers is required
    constructor(client, details, amount, sum) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        this.sum = sum;
    }
    format() {
        //this.sum = 10; inside/outside can't do this, because is readonly
        return `${this.client} qwes $${this.amount} for ${this.details}`;
    }
}
