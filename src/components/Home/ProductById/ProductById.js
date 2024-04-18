import React from 'react';
import {useLocation} from "react-router-dom";

import {useDispatch, useSelector} from "react-redux";
import {deleteItemFromCart, setItemInCart} from "../../../redux";

import css from './ProductById.module.css';

const ProductById = () => {
    const {state} = useLocation();
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart);
    const isItemInCart = items.some(item => item.id === state.id)           //Here we want to know if the current element is in the cart
    const handleClick = (e) => {
        e.stopPropagation();
        if (isItemInCart) {                         //Here we check if the object is in the cart(it`s for buttons delete and buy)
            dispatch(deleteItemFromCart(state.id))
        } else {
            dispatch(setItemInCart(state))
        }
    }


    const {title, description, price, category, image} = state;

    return (
        <div className={css.Container}>
            <div className={css.Card}>
                <h3>
                    <div>{title}</div>
                </h3>
                <img src={image} alt={'images'}/>
                <h4>Price: {price} $</h4>
                <button
                    className={css.CardButton}
                    onClick={handleClick}
                >{isItemInCart ? 'Remove' : 'Buy'}
                </button>
                <p>Description: {description}</p>
                <div>Category: {category}</div>
            </div>
        </div>

    );
};


export {ProductById};