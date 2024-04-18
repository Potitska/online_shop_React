import React from 'react';


import css from './loading.module.css';

const Loading = () => {

    return (
        <div className={css.loading}>
            <span>L</span>
            <span>O</span>
            <span>A</span>
            <span>D</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
            <span>.</span>
            <span>.</span>
        </div>
    );
};

export {Loading};