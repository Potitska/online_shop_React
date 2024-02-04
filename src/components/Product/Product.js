import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {deleteItemFromCart, setItemInCart} from "../../redux";

import css from './Product.module.css';


const Product = ({product}) => {

    const {title, description, price, category, image} = product;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart);
    const isItemInCart = items.some(item => item.id === product.id)           //тут ми дізнаємося чи поточний елеменнт в корзині(за допомогою id) items це масив. some -це стандартний метод масива, він повертає значення тру або фолс, взалежності від поточного стану
    const handleClick = (e) => {
        e.stopPropagation();
        if (isItemInCart) {     //тут об'єкт вже в корзині(це для кнопки delete, щоб воно добавляла товар тільки 1 раз, а на наступний натиск видаляла)
            dispatch(deleteItemFromCart(product.id))     //а тут ми його видаляємо
        } else {
            dispatch(setItemInCart(product))
        }
    }

    const handleClickOneProduct = () => {
        //тут ми робимо дспатч нашого екшина і передаємо наш продукт.Це потрібно для того щоб,коли ми клікнемо на гру, ця гра стане в нас поточною на редакс
        navigate(`/products/${product.id}`, {state: {...product}})
    }

    return (
        <div className={css.Card}>
            <h3>
                <div>{title}</div>
            </h3>
            <img src={image} alt={'images'} onClick={handleClickOneProduct}/>
            <h4>Price: {price} $</h4>
            <button
                className={css.CardButton}
                onClick={handleClick}
            >{isItemInCart ? 'Delete from cart' : 'Buy'}
            </button>
            <p className={css.Description}>Description: {description}</p>
            <div>Category: {category}</div>
        </div>
    );
};

export {Product};