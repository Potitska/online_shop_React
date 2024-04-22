import React, {useState} from 'react';
import {Outlet} from "react-router-dom";

import {Categories, Footer, Header} from "../components";

import css from './mainLayout.module.css';

const MainLayout = () => {

    const [categoryId, setCategoryId] = useState(0);

    return (
        <div className={css.ContainerAllProject}>
            <Header/>
            <Categories value={categoryId} onClickCategory={(index) => setCategoryId(index)}/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export {MainLayout};