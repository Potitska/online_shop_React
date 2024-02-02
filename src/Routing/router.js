import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "../layouts";
import {CategoriesPage, ProductsPage} from "../pages";
import {AppRoutes} from "./AppRoutes";

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
                path: AppRoutes.CATEGORIES,
                element: <CategoriesPage/>
            }
        ]
    }
]);

export {
    router
}