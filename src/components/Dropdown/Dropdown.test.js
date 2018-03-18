import React from 'react';
import {shallow} from 'enzyme';
import {configure} from 'enzyme/build/index';
import Adapter from 'enzyme-adapter-react-16/build/index';
import sinon from 'sinon';
import Dropdown from './Dropdown';
import DropdownOption from './DropdownOption/DropdownOption';

const setup = (props) => {
    const dropdownData = {
        name: 'category',
        displayedName: 'Category',
        options: [
            {
                name: 'Bag',
                value: 'bag',
            },
            {
                name: 'Backpack',
                value: 'backpack',
            }
        ]
    };

    const onChangeDropdownOptionsVisibility = sinon.spy();
    const onChange = sinon.spy();

    configure({adapter: new Adapter()});
    const wrapper = shallow(<Dropdown isOpen={props.isOpen}
                                      name={dropdownData.name}
                                      displayedName={dropdownData.displayedName}
                                      options={dropdownData.options}
                                      onChangeDropdownOptionsVisibility={onChangeDropdownOptionsVisibility}
                                      onChange={onChange}/>);

    return {
        wrapper,
        onChangeDropdownOptionsVisibility,
        onChange
    };
};

describe('Dropdown Component', () => {
    it('should render', () => {
        const {wrapper} = setup({isOpen: false});
        expect(wrapper.exists()).toBe(true);
    });

    it('should render two DropdownOption Components', () => {
        const {wrapper} = setup({isOpen: true});
        expect(wrapper.find('div').find(DropdownOption).length).toBe(2);
    });

    it('should fire onChangeDropdownOptionsVisibility after click', () => {
        const {wrapper, onChangeDropdownOptionsVisibility} = setup({isOpen: false});
        wrapper.find('div').find('p').simulate('click');
        expect(onChangeDropdownOptionsVisibility.calledWith('category', true)).toBe(true);
    });

    it('should fire onChange after option changed', () => {
        const {wrapper, onChange} = setup({isOpen: true});
        wrapper.instance().onOptionClick('bag', true);
        expect(onChange.calledWith(['bag'])).toBe(true);
    });
});