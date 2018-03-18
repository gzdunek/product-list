import React from 'react';
import {push} from 'react-router-redux';
import qs from 'query-string';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {changeFilterOpen} from '../actions';
import FiltersListComponent from '../components/FiltersList/FiltersList';

const mapStateToProps = (state) => ({
    filters: state.filters,
});

const mapDispatchToProps = dispatch => ({
    onChangeFilterOptionsVisibility: (filterName, isOpen) => {
        dispatch(changeFilterOpen(filterName, isOpen));
    },
    dispatch
});

const FiltersList = (props) => {
    const allActiveFilters = qs.parse(props.location.search, {arrayFormat: 'bracket'});

    const handleFiltersChange = (filterName, selectedOptions) => {
        allActiveFilters[filterName] = selectedOptions;
        const filterString = qs.stringify(allActiveFilters, {arrayFormat: 'bracket'});

        //updates current URL
        props.dispatch(push({
            search: filterString
        }));
    };

    return (
        <FiltersListComponent
            {...props}
            allFiltersSelectedOptions={allActiveFilters}
            onFilterChange={handleFiltersChange}/>
    );
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FiltersList));