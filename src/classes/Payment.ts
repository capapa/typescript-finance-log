import { HasFormatter } from "../interfaces/HasFormatter.js";

// classes
export class Payment implements HasFormatter {
    
    // in constructor explicity modifiers is required
   constructor(
       readonly client: string,
       private details: string,
       public amount: number
   ) {}

   format() {
       //this.sum = 10; inside/outside can't do this, because is readonly
       return `${this.client} owes $${this.amount} for ${this.details}`;
   }
}