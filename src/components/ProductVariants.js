import React from 'react';
import PropTypes from 'prop-types';

import './Product.scss';

const ProductVariants = ({variants, displayedVariantId, onVariantClick}) => (
    <div className="product__variants-list">
        {variants.map(variant => (
            <div className={'product__variant ' + (variant.id === displayedVariantId && 'product__variant--selected')}
                // style={{border: variant.id === displayedVariantId && ('1px solid ' + variant.color)}}
                 key={variant.id}
                 onClick={() => onVariantClick(variant.id)}>
                <div className="product__variant-part"/>
                <div className="product__variant-part" style={{backgroundColor: variant.color}}/>
            </div>
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