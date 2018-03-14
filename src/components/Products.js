import React from 'react';
import {Product} from './Product';

import './Products.scss';

export const Products = () => {
    return (
        <div className="products">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    );
};