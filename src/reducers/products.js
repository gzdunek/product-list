import * as types from '../constants/actions';

const products = (state = [], action) => {
    switch (action.type) {
        case types.CHANGE_PRODUCT_VARIANT:
            const newState = [...state];
            const index = newState.findIndex(product => product.id === action.productId);
            newState[index].displayedVariantId = action.variantId;
            return newState;
        default:
            return state;
    }
};

export default products;

export const getFilteredProducts = (products, filters) => {
    if (Object.keys(filters).length === 0) {
        return products;
    }

    let filteredProducts = [...products];
    const filtersCopy = {...filters};

    for (const filter in filtersCopy) {
        if (!filters[filter] || !filters[filter].length) {
            continue;
        }

        filtersCopy[filter] = filtersCopy[filter].map(element => element.toString());

        filteredProducts = filteredProducts.filter(product => {
            if (product[filter] instanceof Array) {
                for (const productSingleParam in product[filter]) {
                    if (filtersCopy[filter].indexOf(product[filter][productSingleParam].toString()) >= 0) {
                        return true;
                    }
                }
            }
            return filtersCopy[filter].indexOf(product[filter].toString()) >= 0;
        });
    }

    return filteredProducts;
};