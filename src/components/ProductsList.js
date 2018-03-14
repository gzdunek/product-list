import React from 'react';
import Product from './Product';
import PropTypes from 'prop-types';

import './ProductsList.scss';

const Products = ({products}) => {
    return (
        <div className="products">
            {products.map(product => (<Product key={product.id} {...product}/>))}
        </div>
    );
};

export default Products;

Products.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        productName: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        variants: PropTypes.arrayOf(PropTypes.shape({
            color: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            inStock: PropTypes.bool.isRequired,
        })).isRequired,
    })).isRequired
};