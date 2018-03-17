import React from 'react';
import PropTypes from 'prop-types';

import './Product.scss';

const ProductVariants = ({variants, displayedVariantId, onVariantClick}) => (
    <div className="product__variants-list">
        {variants && variants.map(variant => (
            <div className={'product__variant ' + (variant.id === displayedVariantId && 'product__variant--selected')}
                 style={{backgroundColor: variant.color}}
                 key={variant.id}
                 onClick={() => onVariantClick(variant.id)}>
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
    })).isRequired,
};

ProductVariants.propTypes = {
    ...ProductVariantsPropTypes,
    onVariantClick: PropTypes.func.isRequired
};