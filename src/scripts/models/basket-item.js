export class BasketItem {
    get cost() {
        return this.price * this.qty;
    }

    constructor(product, price, qty) {
        this.product = product;
        this.price = price;
        this.qty = qty;
    }
}
