import * as types from '../constants/actions';

export const changeFilterOpen = (filterName, isOpen) => ({
    type: types.CHANGE_FILTER_OPEN,
    filterName,
    isOpen
});

export const changeProductVariant = (productId, variantId) => ({
    type: types.CHANGE_PRODUCT_VARIANT,
    productId,
    variantId,
});