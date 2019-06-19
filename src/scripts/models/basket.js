export class Basket {
    get subTotal() {
        return parseFloat(this.basketItems.reduce((accumulator, currentValue) => {

            return accumulator + Number(currentValue.cost);
        }, 0)).toFixed(2);
    }

    get totalCost() {
        return parseFloat(Number(this.subTotal) + Number(this.vat)).toFixed(2);
    }

    get vat() {
        return parseFloat(this.subTotal * 0.2).toFixed(2);
    }

    constructor(basketItems) {
        this.basketItems = basketItems;
    }
}
