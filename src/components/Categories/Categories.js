import React from 'react';

import css from './Categories.module.css';
import {useDispatch} from "react-redux";
import {productsActions} from "../../redux";

const Categories = ({value, onClickCategory}) => {

    const categories = ['All', 'Electronics', 'Jewelery', 'Men\'s clothing', 'Women\'s clothing']

    const dispatch = useDispatch();

    return (
        <div className={css.Categories}>
            <ul>
                {categories.map((categoryName, index) => (
                    <li
                        key={index}
                        onClick={() => {
                            onClickCategory(index);
                            dispatch(productsActions.setCategoryValue(categoryName))
                        }}
                        className={value === index ? css.active : ''}>
                        {categoryName}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export {Categories};