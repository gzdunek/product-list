import {connect} from 'react-redux';
import Products from '../components/ProductsList';
import {getFilteredProducts} from '../reducers';

const mapStateToProps = (state) => {
    const filter = [
        {
            parameter: 'categories',
            values: []
        }
    ];

    return {
        products: getFilteredProducts(state, filter),
    };
};

export const FilteredProducts = connect(mapStateToProps, {})(Products);