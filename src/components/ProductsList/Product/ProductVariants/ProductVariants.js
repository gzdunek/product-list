import React from 'react';
import PropTypes from 'prop-types';

import '../Product.scss';
import {colors} from './variantsColors';

const ProductVariants = ({variants, displayedVariantId, onVariantClick}) => (
    <div className="product__variants-list">
        {variants && variants.map(variant => (
            <div className={'product__variant ' + (variant.id === displayedVariantId && 'product__variant--selected')}
                 style={{
                     backgroundImage: `linear-gradient(45deg, ${colors[variant.colorId].primary} 50%, ${colors[variant.colorId].secondary} 50%)`
                 }}
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
        colorId: PropTypes.number.isRequired,
        imageUrl: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
    })).isRequired,
};

ProductVariants.propTypes = {
    ...ProductVariantsPropTypes,
    onVariantClick: PropTypes.func.isRequired
};