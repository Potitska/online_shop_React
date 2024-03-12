import React, {useCallback, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {MdOutlineShoppingCart} from "react-icons/md";

import {CartMenu} from "./Cart/CartMenu";
import {Search} from "./Search";

import css from './Header.module.css';


const Header = () => {

    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
    const {itemsInCart: items, totalPrice} = useSelector(state => state.cart);

    const totalCount = items.reduce((sum, product) => sum + product.count, 0)

    const navigate = useNavigate();    //це хук для того щоб перевести користувача на нову сторінку

    const handleClick = useCallback(() => {
        setIsCartMenuVisible(false)     //тут ми закриваємо наше меню, коли переходими на нову сторінку
        navigate('/products/order')
    }, [navigate])

    return (
        <div className={css.Header}>
            <div className={css.Logo}>
                <Link to={'/'}>
                    <div>Online Shop</div>
                </Link>
            </div>
            <div className={css.HeaderRight}>
                <Search/>

                <div className={css.CartAllBlock}>

                    {totalCount > 0 ? <span className={css.ItemsInCart}>{totalCount}</span> : null}
                    <MdOutlineShoppingCart
                        className={css.CartIcon}
                        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
                    />
                    {totalPrice > 0 ? <span className={css.CartTotalPrice}>{totalPrice} $</span> : null}
                    {isCartMenuVisible &&
                        <CartMenu items={items} onClick={handleClick} setIsCartMenuVisible={setIsCartMenuVisible}/>}
                </div>
            </div>
        </div>
    );
};

export {Header};