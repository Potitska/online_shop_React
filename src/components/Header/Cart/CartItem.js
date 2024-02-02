import React from 'react';

import css from './CartItem.module.css';

//тут ми робимо розташування товару в корзині
const CartItem = ({title, price, id}) => {
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