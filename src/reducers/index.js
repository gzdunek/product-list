import products, * as fromProducts from './products';
import filters from './filters';

const filteredProducts = {
    products,
    filters
};

export default filteredProducts;

export const getFilteredProducts = (state, filters) =>
    fromProducts.getFilteredProducts(state.products, filters);
