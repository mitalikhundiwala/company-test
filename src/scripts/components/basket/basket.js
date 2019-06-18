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
                console.log('chnage item');
                this.renderSummary();
            });

            return basketItem;
        });

        
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
}
