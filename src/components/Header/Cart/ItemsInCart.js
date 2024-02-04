import React from 'react';

import css from './ItemsInCart.module.css';


//маленький круг, яки показує скільки штук товару у корзині
const ItemsInCart = ({quantity = 0}) => {
    return quantity > 0 ? (
        <div className={css.ItemsInCart}>
            {quantity}
        </div>
    ) : null
};

export {ItemsInCart};