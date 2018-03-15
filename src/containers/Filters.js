import React from 'react';
import {push} from 'react-router-redux';
import qs from 'query-string';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {changeFilterVisibility} from '../actions';
import FiltersList from '../components/FiltersList';

import '../components/Filters.scss';

const mapStateToProps = (state) => ({
    filters: state.filters,
});

const mapDispatchToProps = dispatch => ({
    handleChangeOptionsVisibility: (filterName, isOpen) => {
        dispatch(changeFilterVisibility(filterName, isOpen));
    },
    dispatch
});

const Filters = (props) => {
    const activeFilters = qs.parse(props.location.search, {arrayFormat: 'bracket'});

    const handleFiltersChange = (filterName, selectedOptions) => {
        activeFilters[filterName] = selectedOptions;

        const filterString = qs.stringify(activeFilters, {arrayFormat: 'bracket'});

        props.dispatch(push({
            search: filterString
        }));
    };

    return (
        <FiltersList {...props} selectedOptions={activeFilters} filtersChanged={handleFiltersChange}/>
    );
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Filters));