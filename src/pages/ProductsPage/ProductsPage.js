import React from 'react';

import {Products} from "../../components";
import {Outlet} from "react-router-dom";

const ProductsPage = () => {
    return (
        <div>
            <Products/>
            <Outlet/>
        </div>
    );
};

export {ProductsPage};