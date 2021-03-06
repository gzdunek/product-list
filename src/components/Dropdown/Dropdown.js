import React, {Component} from 'react';
import DropdownOption from './DropdownOption/DropdownOption';
import PropTypes from 'prop-types';

import './Dropdown.scss';

class Dropdown extends Component {

    toggleOptionsVisibility = () => {
        this.setState(
            (prevState => ({isOpen: !prevState.isOpen})),
            () => this.props.onChangeDropdownOptionsVisibility(this.props.name, this.state.isOpen));
    };

    onOptionClick = (optionValue, isChecked) => {
        this.setState(
            (prevState => {
                if (isChecked) {
                    return ({
                        selectedOptions: [...prevState.selectedOptions, optionValue]
                    });
                } else {
                    const index = prevState.selectedOptions.indexOf(optionValue);
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
            isOpen: !!props.isOpen,
            selectedOptions: (props.selectedOptions && props.selectedOptions.map(option => option.toString())) || [],
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.isOpen !== nextProps.isOpen) {
            this.setState(() => ({isOpen: nextProps.isOpen}));
        }
    }

    render() {
        return (
            <div className={'dropdown ' + (this.state.isOpen && 'dropdown--opened')}>
                <p className="dropdown__title"
                   onClick={() => this.toggleOptionsVisibility()}>
                    {this.props.displayedName}
                    <i className="fas fa-arrow-down dropdown__title-icon"/>
                </p>
                {this.state.isOpen && <div className="dropdown__options dropdown__options--opened">
                    {this.props.options && this.props.options.map(option =>
                        <DropdownOption
                            key={option.value}
                            option={option}
                            isChecked={this.state.selectedOptions.indexOf(option.value.toString()) >= 0}
                            onOptionClick={(isChecked) => this.onOptionClick(option.value.toString(), isChecked)}
                        />
                    )}
                </div>}
            </div>
        );
    };
}

export default Dropdown;

Dropdown.propTypes = {
    isOpen: PropTypes.bool,
    displayedName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]).isRequired,
    })).isRequired,
    selectedOptions: PropTypes.array,
    onChangeDropdownOptionsVisibility: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};