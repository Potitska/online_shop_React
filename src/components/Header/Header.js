import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {MdOutlineShoppingCart} from "react-icons/md";
import {useSelector} from "react-redux";

import css from './Header.module.css';
import {CartMenu} from "./Cart/CartMenu";
import {calcTotalPrice} from "./Cart/TotalPrice";
import {ItemsInCart} from "./Cart/ItemsInCart";


const Header = () => {

    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice = calcTotalPrice(items);

    return (
        <div className={css.Header}>
            <div className={css.Logo}>
                <Link to={'/'}>
                    <div>Online Shop</div>
                </Link>
            </div>
            <div className={css.HeaderRight}>
                <div className={css.Search}>
                    <svg className={css.Icon} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <g data-name="Layer 2" id="Layer_2">
                            <path d="M13,23A10,10,0,1,1,23,13,10,10,0,0,1,13,23ZM13,5a8,8,0,1,0,8,8A8,8,0,0,0,13,5Z"/>
                            <path
                                d="M28,29a1,1,0,0,1-.71-.29l-8-8a1,1,0,0,1,1.42-1.42l8,8a1,1,0,0,1,0,1.42A1,1,0,0,1,28,29Z"/>
                        </g>
                    </svg>
                    <input type={"text"} placeholder={'Пошук товару...'}/>
                </div>
                <div className={css.CartAllBlock}>
                    <ItemsInCart quantity={items.length}/>
                    <MdOutlineShoppingCart
                        className={css.CartIcon}
                        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
                    />
                    {totalPrice > 0 ? <span className={css.CartTotalPrice}>{totalPrice} $</span> : null}
                    {isCartMenuVisible && <CartMenu items={items} onClick={() => null}/>}
                </div>
            </div>
        </div>
    );
};

export {Header};