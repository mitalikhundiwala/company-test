import $ from 'jquery';
import template from './basket.handlebars';
import summaryTemplate from './basket-summary.handlebars';

import { BasketItemComponent } from '../basket-item/basket-item';

import './basket.scss';

export class BasketComponent {
    constructor(basket) {
        this.basket = basket;
        this.el = document.createElement('div');
        this.$el = $(this.el);
        this.$el.addClass('basket');

        this.lineItems = this.basket.basketItems.map((datum) => {
            const basketItem = new BasketItemComponent(datum);
            basketItem.render();
            basketItem.on('change', (basketItem) => {
                this.renderSummary();
            });
            basketItem.on('remove', this._onRemoveBasketItem.bind(this));

            return basketItem;
        });

        this.$el.on('click', '.btn-buy-now', this._onBuyBtnClick.bind(this));
    }

    render() {
        this.$el.html(template(this.basket));
        this.renderSummary();

        this.lineItems.forEach((datum) => {
            this.$el.find('table tbody').append(datum.$el);
        });
    }

    renderSummary() {
        this.$el.find('tfoot').html(summaryTemplate(this.basket));
    }

    _onRemoveBasketItem(basketItem) {
        const index = this.basket.basketItems.indexOf(basketItem);
        this.basket.basketItems.splice(index, 1);
        if (this.basket.basketItems.length === 0) {
            this.$el.find('.btn-buy-now').prop('disabled', true);
        }
        this.renderSummary();
    }

    _onBuyBtnClick() {
        console.log(this.basket.basketItems);
        $.post('', JSON.stringify(this.basket.basketItems)).always(function(
            data
        ) {
            alert('Thank you for shopping with us!');
        });
    }
}
