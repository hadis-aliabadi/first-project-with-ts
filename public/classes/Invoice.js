export class Invoice {
    constructor(client, detailes, amount) {
        this.client = client;
        this.detailes = detailes;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.detailes} `;
    }
}
