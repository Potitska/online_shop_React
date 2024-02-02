import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {productsActions} from "../../redux";

import {Product} from "./Product";
import css from './Products.module.css';

const Products = () => {
    const dispatch = useDispatch();
    const {products} = useSelector(state => state.products);

    useEffect(() => {
        dispatch(productsActions.getAll())
    }, [dispatch])
    return (
        <div className={css.Container}>
            {products.map(product => <Product key={product.id} product={product}/>)}
        </div>
    );
};


export {Products};