import React from 'react';
import Dropdown from './Dropdown';
import PropTypes from 'prop-types';

import './FiltersList.scss';

const FiltersList = (props) => (
    <div className="filters">
        {props.filters.map(filter =>
            <Dropdown key={filter.name}
                      {...filter}
                      selectedOptions={props.allFiltersSelectedOptions[filter.name]}
                      onChange={selectedOptions => props.onFilterChange(filter.name, selectedOptions)}
                      onChangeOptionsVisibility={props.onChangeOptionsVisibility}
            />)}
    </div>
);

export default FiltersList;

FiltersList.propTypes = {
    filters: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        displayedName: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
        })).isRequired,
    })),
    allFiltersSelectedOptions: PropTypes.object,
    onFilterChange: PropTypes.func.isRequired,
    onChangeOptionsVisibility: PropTypes.func.isRequired,
};