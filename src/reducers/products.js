const products = (state = [], action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return state;
        default:
            return state;
    }
};

export default products;

export const getFilteredProducts = (products, filters) => {
    if (!filters.length) {
        return products;
    }

    let filteredProducts = [...products];

    filters.forEach(filter => {
        if (!filter.parameter || !filter.values.length) {
            return;
        }

        filteredProducts = filteredProducts.filter(product => {
            return filter.values.indexOf(product[filter.parameter]) >= 0;
        });
    });

    return filteredProducts;
};