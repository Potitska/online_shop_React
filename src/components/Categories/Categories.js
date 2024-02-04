import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {productsActions} from "../../redux";
import {Category} from "../Category/Category";

import css from './Categories.module.css';

const Сategories = () => {

    const dispatch = useDispatch();
    const {categories} = useSelector(state => state.products);

    useEffect(() => {
        dispatch(productsActions.getAllCategories())
    }, [dispatch])

    return (
        <div className={css.Сategories}>
            {categories.map(category => <Category key={category.id} category={category}/>)}
        </div>
    );
};

export {Сategories};