import React from 'react';
import {useSelector} from "react-redux";

import {calcTotalPrice, OrderItem} from "../../components";

import css from './OrderPage.module.css';

const OrderPage = () => {
    const items = useSelector(state => state.cart.itemsInCart)

    if (items.length < 1) {
        return <h1>Your cart is empty :(</h1>
    }
    return (
        <div className={css.OrderPage}>
            <div className={css.OrderPageLeft}>
                {items.map(product => <OrderItem product={product}/>)}
            </div>
            <div className={css.OrderPageRight}>
                <div className={css.OrderPageTotalPrice}>
                    <span>
                       {items.length} ORDER SUMMARY {calcTotalPrice(items)} $
                    </span>
                </div>
            </div>
        </div>
    );
};

export {OrderPage};