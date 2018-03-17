import React from 'react';
import PropTypes from 'prop-types';
import './Product.scss';
import ProductVariants, {ProductVariantsPropTypes} from './ProductVariants';

const Product = ({id: productId, productName, description, variants, displayedVariantId, onProductVariantClick}) => {
    const getVariant = (variantId) => {
        return variants.find(variant => variant.id === variantId);
    };

    return (
        <div className="product">
            <img className="product__image" src={getVariant(displayedVariantId).imageUrl} alt={productName}/>
            <h3 className="product__title">{productName}</h3>
            <p className="product__description">{description}</p>
            <ProductVariants variants={variants}
                             displayedVariantId={displayedVariantId}
                             onVariantClick={(variantId) => onProductVariantClick(productId, variantId)}/>
            <button className="product__buy-button">{getVariant(displayedVariantId).price} | Buy</button>
        </div>
    );
};

export const ProductPropTypes = {
    id: PropTypes.number.isRequired,
    productName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    displayedVariantId: PropTypes.number.isRequired,
    ...ProductVariantsPropTypes,
};

Product.propTypes = {
    ...ProductPropTypes,
    onProductVariantClick: PropTypes.func.isRequired
};

export default Product;