import React from 'react';

import css from './CartMenu.module.css';
import {calcTotalPrice} from "./TotalPrice";
import {CartItem} from "./CartItem";

const CartMenu = ({items, onClick}) => {
    return (
        <div className={css.CartMenu}>
            <div className={css.CartMenuProductsList}>
                {items.length > 0 ? items.map(product => <CartItem key={product.id} price={product.price}
                                                                   title={product.title}
                                                                   id={product.id}/>) : 'Your cart is empty'}
            </div>
            {items.length > 0 ?
                <div className={css.CartMenuArrange}>
                    <div className={css.CartMenuTotalPrice}>
                        <span>Total:</span>
                        <span>{calcTotalPrice(items)} $</span>
                        <button className={css.Button} onClick={onClick}>
                            Checkout
                        </button>
                    </div>
                </div> : null}
        </div>
    );
};

export {CartMenu};