const products = (state = [], action) => {
    switch (action.type) {
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

    for (const filter in filters) {
        if (!filters[filter].length) {
            continue;
        }

        filteredProducts = filteredProducts.filter(product => {
            if (product[filter] instanceof Array) {
                for (const productSingleParam in product[filter]) {
                    if (filters[filter].indexOf(product[filter][productSingleParam]) >= 0)
                        return true;
                }
            }

            return filters[filter].indexOf(product[filter]) >= 0;
        });
    }

    return filteredProducts;
};