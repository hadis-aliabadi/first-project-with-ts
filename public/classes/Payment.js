export class Payment {
    constructor(recipient, detailes, amount) {
        this.recipient = recipient;
        this.detailes = detailes;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} owes $${this.amount} for ${this.detailes} `;
    }
}
