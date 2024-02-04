import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "../layouts";
import {AppRoutes} from "./AppRoutes";
import {OrderPage, ProductByIdPage, ProductsPage} from "../pages";


const router = createBrowserRouter([
    {
        path: AppRoutes.MAIN,
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to={'products'}/>
            },
            {
                path: AppRoutes.PRODUCTS,
                element: <ProductsPage/>
            },
            {
                path: AppRoutes.PRODUCTBYID,
                element: <ProductByIdPage/>
            },
            {
                path: AppRoutes.ORDER,
                element: <OrderPage/>
            }
        ]
    }
]);

export {
    router
}