import React from 'react';

import css from './Product.module.css';
import {useDispatch, useSelector} from "react-redux";
import {deleteItemFromCart, setItemInCart} from "../../redux";

const Product = ({product}) => {

    const {title, description, price, category, image} = product;
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart);
    const isItemInCart = items.some(item => item.id === product.id)
    const handleClick = (e) => {
        e.stopPropagation();
        if (isItemInCart) {     //тут об'єкт вже в корзині
            dispatch(deleteItemFromCart(product.id))     //а тут ми його видаляємо
        } else {
            dispatch(setItemInCart(product))
        }
    }

    return (
        <div className={css.Card}>
            <h3>
                <div>{title}</div>
            </h3>
            <img src={image} alt={'images'}/>
            <h4>Price: {price} $</h4>
            <button
                className={css.CardButton}
                type={isItemInCart ? 'secondary' : 'primary'}
                onClick={handleClick}
            >{isItemInCart ? 'Delete from cart' : 'Buy'}
            </button>
            <p>Description: {description}</p>
            <div>Category: {category}</div>
        </div>
    );
};

export {Product};