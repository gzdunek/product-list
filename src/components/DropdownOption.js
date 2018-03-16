import React from 'react';
import PropTypes from 'prop-types';

const DropdownOption = ({option, isChecked, onOptionClick}) => (
    <div>
        <input type="checkbox" checked={isChecked} onChange={(event) => onOptionClick(event.target.checked)}/>
        <span>{option.name}</span>
    </div>
);

export default DropdownOption;

DropdownOption.propTypes = {
    option: PropTypes.object.isRequired,
    isChecked: PropTypes.bool,
    onOptionClick: PropTypes.func.isRequired
};