import {combineReducers} from 'redux';
import products, * as fromProducts from './products';

const filteredProducts = combineReducers({
    products
});

export default filteredProducts;

export const getFilteredProducts = (state, filterName, filterValue) =>
    fromProducts.getFilteredProducts(state.products, filterName, filterValue);
