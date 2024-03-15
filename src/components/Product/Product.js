import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {deleteItemFromCart, setItemInCart} from "../../redux";

import css from './Product.module.css';


const Product = ({product}) => {

    const {id, title, description, price, category, image} = product;

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart);
    const isItemInCart = items.some(item => item.id === product.id)       //Here we want to know if the current element is in the cart
    const handleClick = (e) => {
        e.stopPropagation();
        if (isItemInCart) {     //Here we check if the object is in the cart(it`s for buttons delete and buy)
            dispatch(deleteItemFromCart(product.id))
        } else {
            dispatch(setItemInCart(product))
        }
    }

    const handleClickOneProduct = () => {
        navigate(`/products/${product.id}`, {state: {...product}})
    }

    return (
        <div className={css.Card}>
            <h3 onClick={handleClickOneProduct}>
                <div>{title}</div>
            </h3>
            <img src={image} alt={'images'} onClick={handleClickOneProduct}/>
            <h4>Price: {price} $</h4>
            <button
                className={css.CardButton}
                onClick={handleClick}
            >{isItemInCart ? 'Remove' : 'Buy'}
            </button>
            <p className={css.Description}>Description: {description}</p>
            <div>Category: {category}</div>
        </div>
    );
};

export {Product};