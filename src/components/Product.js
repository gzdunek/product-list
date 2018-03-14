import React from 'react';
import PropTypes from 'prop-types';
import './Product.scss';

const Product = ({productName, description, variants}) => {
    return (
        <div className="product">
            <img className="product__image" src={variants[0].imageUrl} alt={productName}/>
            <h2 className="product__title">{productName}</h2>
            <p className="product__description">{description}</p>
            <button className="product__buy__button">{variants[0].price} | Buy</button>
        </div>
    );
};

Product.propTypes = {
    params: PropTypes.shape({
        productName: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        variants: PropTypes.arrayOf(PropTypes.shape({
            color: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            inStock: PropTypes.bool.isRequired,
        })).isRequired,
    }),
};

export default Product;