export class Ingredient {
    public name:string;
    public amount:number;

    constructor(name: string, amount: number) {
        this.name = name;
        this.amount = amount;
    }

    // or, as an alternative:

    // constructor(public name: string, public amount: number) {}
}