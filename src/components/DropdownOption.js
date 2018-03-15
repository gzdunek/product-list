import React from 'react';

export const DropdownOption = ({option, checked, onOptionClick}) => (
    <div>
        <input type="checkbox" checked={checked} onChange={(event) => onOptionClick(event.target.checked)}/>
        <span>{option.name}</span>
    </div>
);
