export class BasketItem {
    get cost() {
        return parseFloat(this.price * this.qty).toFixed(2);
    }

    constructor(product, price, qty) {
        this.product = product;
        this.price = price;
        this.qty = qty;
    }
}
