import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import PropTypes from 'prop-types';

import './FiltersList.scss';

const FiltersList = ({filters, allFiltersSelectedOptions = [], onFilterChange, onChangeFilterOptionsVisibility}) => (
    <div>
        {filters.map(filter =>
            <div key={filter.name} className="filters__item">
                <Dropdown {...filter}
                          selectedOptions={allFiltersSelectedOptions[filter.name]}
                          onChange={selectedOptions => onFilterChange(filter.name, selectedOptions)}
                          onChangeDropdownOptionsVisibility={onChangeFilterOptionsVisibility}
                />
            </div>)}
    </div>
);

export default FiltersList;

FiltersList.propTypes = {
    filters: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        displayedName: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            value: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
            ]).isRequired,
        })).isRequired,
    })),
    allFiltersSelectedOptions: PropTypes.object,
    onFilterChange: PropTypes.func.isRequired,
    onChangeFilterOptionsVisibility: PropTypes.func.isRequired,
};