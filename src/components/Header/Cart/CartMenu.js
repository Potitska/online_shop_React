import React, {useEffect, useRef} from 'react';

import {CartItem} from "./CartItem";

import css from './CartMenu.module.css';


const CartMenu = ({items, onClick, setIsCartMenuVisible}) => {


    const cartMenuRef = useRef(null);   //close the cart when you click outside the cart

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cartMenuRef.current && !cartMenuRef.current.contains(event.target)) {
                setIsCartMenuVisible(false)
            }
        };

        //запуск ефекта
        document.addEventListener('mousedown', handleClickOutside);

        //очистка ефекта
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [setIsCartMenuVisible])

    return (
        <div ref={cartMenuRef} className={css.CartMenu}>
            <div className={css.CartMenuProductsList}>
                {items.length > 0 ? items.map(product => <CartItem key={product.id} price={product.price}
                                                                   title={product.title}
                                                                   id={product.id}/>) : 'Your cart is empty'}
            </div>
            {items.length > 0 ?
                <div className={css.CartMenuArrange}>
                    <button className={css.Button} onClick={onClick}>
                        Checkout
                    </button>
                </div> : null}
        </div>
    );
};

export {CartMenu};