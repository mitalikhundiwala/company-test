import $ from 'jquery';
import template from './basket.handlebars';

import { BasketItemComponent } from '../basket-item/basket-item';

import './basket.scss';

export class BasketComponent {
    constructor(basketItems) {
        this.basketItems = basketItems;
        this.el = document.createElement('div');
        this.$el = $(this.el);
        this.$el.addClass('basket');
    }

    render() {
        this.$el.html(template());

        this.basketItems.forEach(datum => {
            
            const basketItem = new BasketItemComponent(datum);
            basketItem.render();

            this.$el.find('table tbody').prepend(basketItem.$el);
        });
    }
}
