import React from 'react';
import PropTypes from 'prop-types';

const DropdownOption = ({option, isChecked, onOptionClick}) => (
    <div className="dropdown__option">
        <input type="checkbox"
               checked={isChecked}
               onChange={(event) => onOptionClick(event.target.checked)}
               id={option.name}
        />
        <label htmlFor={option.name}> {option.name}</label>
    </div>
);

export default DropdownOption;

DropdownOption.propTypes = {
    option: PropTypes.object.isRequired,
    isChecked: PropTypes.bool,
    onOptionClick: PropTypes.func.isRequired
};