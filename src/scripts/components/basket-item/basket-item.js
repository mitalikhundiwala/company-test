import $ from 'jquery';
import template from './basket-item.handlebars';

import './basket-item.scss';

export class BasketItemComponent {
    constructor(basketItem) {
        this.basketItem = basketItem;
        this.el = document.createElement('tr');
        this.$el = $(this.el);
        this.$el.addClass('basket-item');
    }

    render() {
        this.$el.html(template(this.basketItem));
    }
}
