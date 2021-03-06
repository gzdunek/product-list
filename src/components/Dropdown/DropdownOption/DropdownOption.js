import React from 'react';
import PropTypes from 'prop-types';

const DropdownOption = ({option, isChecked, onOptionClick}) => (
    <div className="dropdown__option">
        <input type="checkbox"
               className="dropdown__option-checkbox"
               checked={isChecked}
               onChange={(event) => onOptionClick(event.target.checked)}
               id={option.value}
        />
        <label htmlFor={option.value}> {option.value && option.name}</label>
    </div>
);

export default DropdownOption;

DropdownOption.propTypes = {
    option: PropTypes.object.isRequired,
    isChecked: PropTypes.bool,
    onOptionClick: PropTypes.func.isRequired
};