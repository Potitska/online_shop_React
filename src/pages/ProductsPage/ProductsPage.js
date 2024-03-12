import React from 'react';

import {Outlet} from "react-router-dom";

import {Products} from "../../components";

const ProductsPage = () => {
    return (
        <div>
            <Products/>
            <Outlet/>
        </div>
    );
};

export {ProductsPage};