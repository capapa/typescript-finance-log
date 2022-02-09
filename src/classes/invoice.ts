// classes
export class Invoice{
    
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