import React from 'react';
import PropTypes from 'prop-types';

import './ProductsList.scss';
import Product, {ProductPropTypes} from './Product/Product';

const ProductsList = ({products, onProductVariantClick}) => {
    return (
        <div className="products">
            {products.map(product => (
                <Product key={product.id} {...product} onProductVariantClick={onProductVariantClick}/>
            ))}
        </div>
    );
};

export default ProductsList;

ProductsList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        ...ProductPropTypes
    })).isRequired,
    onProductVariantClick: PropTypes.func.isRequired,
};