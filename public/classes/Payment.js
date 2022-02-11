// classes
export class Payment {
    // in constructor explicity modifiers is required
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        //this.sum = 10; inside/outside can't do this, because is readonly
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
