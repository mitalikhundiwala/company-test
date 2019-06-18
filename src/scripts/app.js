import $ from 'jquery';
import { BasketComponent } from './components/basket/basket';

import '../styles/app.scss';

const basketItems = [
    {
        product: 'Cotton T-Shirt, Medium',
        price: 1.99,
        qty: 1,
        cost: 1.99
    },
    {
        product: 'Baseball Cap, One Size',
        price: 2.99,
        qty: 2,
        cost: 5.98
    },
    {
        product: 'Swim Shorts, Medium',
        price: 3.99,
        qty: 1,
        cost: 3.99
    }
];

const basket = new BasketComponent(basketItems);
basket.render();

$('.basket-container').append(basket.$el);