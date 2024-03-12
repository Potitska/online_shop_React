import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {OrderItem} from "../../components";

import css from './OrderPage.module.css';
import {clearItems} from "../../redux";

const OrderPage = () => {
    const {itemsInCart: items, totalPrice} = useSelector(state => state.cart);
    const totalCount = items.reduce((sum, product) => sum + product.count, 0)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onClickClearAll = () => {
        if (window.confirm('Clear the cart?')) {
            dispatch(clearItems())
        }
    };

    if (totalCount < 1) {
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
                       {totalCount} pcs.
                        ORDER SUMMARY {totalPrice} $
                    </span>
                </div>
            </div>
            <div className={css.BackClearButton}>
                <button onClick={() => navigate('/products')}>Back to shopping</button>
                <button onClick={onClickClearAll}>Clear the cart</button>
            </div>
        </div>
    );
};

export {OrderPage};