import React from 'react';
import {useLocation} from "react-router-dom";

import {useDispatch, useSelector} from "react-redux";
import {deleteItemFromCart, setItemInCart} from "../../redux";

import css from './ProductById.module.css';

const ProductById = () => {
    const {state} = useLocation();
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart);
    const isItemInCart = items.some(item => item.id === state.id)           //тут ми дізнаємося чи поточний елеменнт в корзині(за допомогою id) items це масив. some -це стандартний метод масива, він повертає значення тру або фолс, взалежності від поточного стану
    const handleClick = (e) => {
        e.stopPropagation();
        if (isItemInCart) {     //тут об'єкт вже в корзині(це для кнопки delete, щоб воно добавляла товар тільки 1 раз, а на наступний натиск видаляла)
            dispatch(deleteItemFromCart(state.id))     //а тут ми його видаляємо
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
                >{isItemInCart ? 'Delete from cart' : 'Buy'}
                </button>
                <p>Description: {description}</p>
                <div>Category: {category}</div>
            </div>
        </div>

    );
};


export {ProductById};