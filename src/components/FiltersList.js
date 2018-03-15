import React from 'react';
import {Dropdown} from './Dropdown';

import './Filters.scss';

const FiltersList = (props) => (
    <div className="filters">
        {props.filters.map(filter =>
            <Dropdown key={filter.name}
                      {...filter}
                      selectedOptions={props.selectedOptions[filter.name]}
                      onChange={selectedOptions => props.filtersChanged(filter.name, selectedOptions)}
                      onChangeOptionsVisibility={props.handleChangeOptionsVisibility}
            />)}
    </div>
);

export default FiltersList;