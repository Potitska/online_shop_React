import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";


import {productsActions} from "../../redux";
import {Product} from "../Product/Product";

import css from './Products.module.css';

const Products = () => {
    const dispatch = useDispatch();
    const {products, searchValue, categoryFilter} = useSelector(state => state.products);
    let filteredProducts = products

    //search
    if (searchValue) {
        filteredProducts = products.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
    }

    //filter category
    if (categoryFilter && categoryFilter !== 'All') {
        filteredProducts = products.filter(item => item.category.toLowerCase() === categoryFilter.toLowerCase())

        //search in filtered category arr
        if (searchValue) {
            filteredProducts = filteredProducts.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
        }
    }


    useEffect(() => {
        dispatch(productsActions.getAll())
    }, [dispatch])

    return (
        <div className={css.Container}>

            {filteredProducts.length !== 0 ? filteredProducts.map((product) => <Product key={product.id}
                                                                                        product={product}/>) : 'Not found'}

        </div>
    );
};


export {Products};