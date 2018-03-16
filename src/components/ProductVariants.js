import React from 'react';
import PropTypes from 'prop-types';

import './Product.scss';

const ProductVariants = ({variants, onVariantClick}) => (
    <div className="product__variants__list">
        {variants.map(variant => (
            <div className="product__variant"
                 key={variant.id}
                 onClick={() => onVariantClick(variant.id)}
                 style={{backgroundColor: variant.color}}
            />
        ))}
    </div>
);

export default ProductVariants;

export const ProductVariantsPropTypes = {
    variants: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        inStock: PropTypes.bool.isRequired,
    })),
};

ProductVariants.propTypes = {
    ...ProductVariantsPropTypes,
    onVariantClick: PropTypes.func.isRequired
};