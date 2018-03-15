import React, {Component} from 'react';
import {DropdownOption} from './DropdownOption';

import './Dropdown.scss';

export class Dropdown extends Component {

    toggleOptionsVisibility = () => {
        this.setState((prevState => ({isOpen: !prevState.isOpen})),
            () => this.props.onChangeOptionsVisibility(this.props.name, this.state.isOpen));
    };
    onOptionClick = (optionName, isChecked) => {
        this.setState((prevState => {
                if (isChecked) {
                    return ({
                        selectedOptions: [...prevState.selectedOptions, optionName]
                    });
                } else {
                    const index = prevState.selectedOptions.indexOf(optionName);
                    return ({
                        selectedOptions: prevState.selectedOptions.filter((option, i) => i !== index)
                    });
                }
            }),
            () => this.props.onChange(this.state.selectedOptions));
    };

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            selectedOptions: props.selectedOptions || [],
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.isOpen !== nextProps.isOpen) {
            this.setState(() => ({isOpen: nextProps.isOpen}));
        }
    }

    render() {
        return (
            <div className="dropdown">
                <h2 className="dropdown__title"
                    onClick={() => this.toggleOptionsVisibility()}>{this.props.displayedName}</h2>
                {this.state.isOpen && <div className="dropdown__options">
                    {this.props.options.map(option =>
                        <DropdownOption
                            key={option.name}
                            option={option}
                            checked={this.state.selectedOptions.indexOf(option.name) >= 0}
                            onOptionClick={(isChecked) => this.onOptionClick(option.name, isChecked)}
                        />
                    )}
                </div>}
            </div>
        );
    };
}