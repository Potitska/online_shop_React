import React from 'react';

import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

import {Loading, Products} from "../../components";

const ProductsPage = () => {
    const {isLoading} = useSelector(state => state.products);
    return (
        <div>
            {isLoading && <Loading/>}
            <Products/>
            <Outlet/>
        </div>
    );
};

export {ProductsPage};