export class Basket {
    get subTotal() {
        return this.basketItems.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.cost;
        }, 0);
    }

    get totalCost() {
        return this.subTotal + this.vat;
    }

    get vat() {
        return this.subTotal * 0.2;
    }

    constructor(basketItems) {
        this.basketItems = basketItems;
    }
}
