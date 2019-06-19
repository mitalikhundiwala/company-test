import $ from 'jquery';
import EventEmitter from 'eventemitter3';

import template from './basket-item.handlebars';

import './basket-item.scss';

export class BasketItemComponent extends EventEmitter {
    constructor(basketItem) {
        super();
        this.basketItem = basketItem;
        this.el = document.createElement('tr');
        this.$el = $(this.el);
        this.$el.addClass('basket-item');

        this.$el.on('change.basketItem', '.qty', this._onQtyChange.bind(this));
        this.$el.on(
            'click.basketItem',
            '.remove-item',
            this._onRemoveClick.bind(this)
        );
    }

    render() {
        this.$el.html(template(this.basketItem));
    }

    _onQtyChange(event) {
        console.log('change qty');
        const qty = event.target.value;
        this.basketItem.qty = qty;
        this.$el.find('.col-cost').html(this.basketItem.cost);
        this.emit('change', this.basketItem);
    }

    _onRemoveClick(event) {
        event.preventDefault();
        var del = confirm('Are you sure you want to remove this item?');
        if (del == true) {
            this.$el.remove();
            this.emit('remove', this.basketItem);
        }
    }
}
