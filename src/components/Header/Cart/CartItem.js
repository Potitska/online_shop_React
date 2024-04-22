import React from 'react';

import css from './cartItem.module.css';

//here we place the product in the cart
const CartItem = ({title, price}) => {
    return (
        <div className={css.CartItem}>
            <span>{title}</span>
            <div className={css.CartItemPrice}>
                <span>{price} $</span>
            </div>
        </div>
    );
};

export {CartItem};