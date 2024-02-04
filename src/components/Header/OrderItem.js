import React from 'react';
import {useDispatch} from "react-redux";
import {ImCross} from "react-icons/im";

import {deleteItemFromCart} from "../../redux";

import css from '..//../pages/OrderPage/OrderPage.module.css'

const OrderItem = ({product}) => {

    const dispatch = useDispatch();
    const hadleClick = () => {
        dispatch(deleteItemFromCart(product.id))
    }

    return (
        <div className={css.OrderItem}>
            <div className={css.OrderItemCover}>
                <img src={product.image} alt="img"/>
            </div>
            <div className={css.OrderItemTitle}>
                <span>{product.title}</span>
            </div>
            <div className={css.OrderItemPrice}>
                <span>{product.price} $</span>
                <ImCross
                    size={20}
                    className={css.CartItemDeleteIcon}
                    onClick={hadleClick}
                />
            </div>
        </div>
    );
};

export {OrderItem};