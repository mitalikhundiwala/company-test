import $ from 'jquery';
import { BasketComponent } from './components/basket/basket';
import { Basket } from './models/basket';
import { BasketItem } from './models/basket-item';

import '../styles/app.scss';

const basketItems = [
    new BasketItem('Cotton T-Shirt, Medium', 1.99, 1),
    new BasketItem('Baseball Cap, One Size', 2.99, 2),
    new BasketItem('Swim Shorts, Medium', 3.99, 1),
];

const basket = new Basket(basketItems);

const basketComponent = new BasketComponent(basket);
basketComponent.render();

$('.basket-container').append(basketComponent.$el);
