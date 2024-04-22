import React from 'react';
import {useDispatch} from "react-redux";

import {ImCross} from "react-icons/im";
import {CiCircleMinus, CiCirclePlus} from "react-icons/ci";


import {deleteItemFromCart, minusItem, setItemInCart} from "../../redux";

import css from '../../pages/OrderPage/orderPage.module.css'

const OrderItem = ({product}) => {
    const {id} = product;

    const dispatch = useDispatch();

    const onClickPlus = () => {
        dispatch(setItemInCart({id}))
    }

    const onClickMinus = () => {
        dispatch(minusItem(id))
    }
    const onClickRemove = () => {
        if (window.confirm('Are you sure you want to remove ?'))
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
            <div className={css.TotalAddingProducts}>
                <CiCirclePlus
                    size={22}
                    className={css.CartItemPlusIcon}
                    onClick={onClickPlus}
                /> {product.count}
                <CiCircleMinus
                    size={22}
                    className={css.CartItemMinusIcon}
                    onClick={onClickMinus}
                />
            </div>
            <div className={css.OrderItemPrice}>
                <span>{product.price * product.count} $</span>
                <ImCross
                    size={17}
                    className={css.CartItemDeleteIcon}
                    onClick={onClickRemove}
                />
            </div>
        </div>
    );
};

export {OrderItem};