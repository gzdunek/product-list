import React from 'react';
import PropTypes from 'prop-types';
import './Product.scss';
import ProductVariants, {ProductVariantsPropTypes} from './ProductVariants/ProductVariants';

const Product = ({id: productId, productName, description, variants, displayedVariantId, onProductVariantClick}) => {
    const getVariant = (variantId) => {
        return variants.find(variant => variant.id === variantId);
    };

    return (
        <div className="product">
            <img className="product__image" src={getVariant(displayedVariantId).imageUrl} alt={productName}/>
            <h4 className="product__title">
                <span>{productName}</span>
                <span className="product__price">{getVariant(displayedVariantId).price}</span>
            </h4>
            <p className="product__description">{description}</p>
            <ProductVariants variants={variants}
                             displayedVariantId={displayedVariantId}
                             onVariantClick={(variantId) => onProductVariantClick(productId, variantId)}/>
            <div className="product__buttons">
                <button className="product__button product__button--secondary">
                    <h3 className="product__button__text">
                        Personalize
                    </h3>
                </button>
                <button className="product__button product__button--primary">
                    <h3 className="product__button__text">
                        Quick add
                    </h3>
                </button>
            </div>
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