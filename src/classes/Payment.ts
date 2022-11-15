import { HasFormatter } from "../interfaces/HasFormatter";

export class Payment implements HasFormatter{

    constructor(
        readonly recipient: string,
        private  detailes:string,
        public amount:number,
        ){}

    format(){
        return `${this.recipient} owes $${this.amount} for ${this.detailes} `;
    }
}