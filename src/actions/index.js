export const changeFilterVisibility = (filterName, isOpen) => ({
    type: 'CHANGE_FILTER_VISIBILITY',
    filterName,
    isOpen
});

export const changeProductVariant = (productId, variantId) => ({
    type: 'CHANGE_PRODUCT_VARIANT',
    productId,
    variantId,
});