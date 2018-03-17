export const changeFilterOpen = (filterName, isOpen) => ({
    type: 'CHANGE_FILTER_OPEN',
    filterName,
    isOpen
});

export const changeProductVariant = (productId, variantId) => ({
    type: 'CHANGE_PRODUCT_VARIANT',
    productId,
    variantId,
});