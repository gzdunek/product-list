import {connect} from 'react-redux';
import Products from '../components/ProductsList/ProductsList';
import {getFilteredProducts} from '../reducers';
import {withRouter} from 'react-router';

import qs from 'query-string';
import {changeProductVariant} from '../actions';

const mapStateToProps = (state, ownParams) => {
    const parsedFilters = qs.parse(ownParams.location.search, {arrayFormat: 'bracket'});

    return {
        products: getFilteredProducts(state, parsedFilters || {}),
    };
};

export default withRouter(connect(mapStateToProps, {onProductVariantClick: changeProductVariant})(Products));