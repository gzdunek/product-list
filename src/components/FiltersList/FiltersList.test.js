import React from 'react';
import {shallow} from 'enzyme';
import {configure} from 'enzyme/build/index';
import Adapter from 'enzyme-adapter-react-16/build/index';
import FiltersList from './FiltersList';
import Dropdown from '../Dropdown/Dropdown';

const setup = () => {
    const filters = [
        {
            displayedName: 'Category',
            name: 'category',
            isOpen: false,
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
        },
        {
            displayedName: 'Color',
            name: 'colors',
            isOpen: false,
            options: [
                {
                    name: 'Red',
                    value: 'red',
                },
                {
                    name: 'Blue',
                    value: 'blue',
                }
            ]
        }
    ];

    const onFilterChange = jest.fn();
    const onChangeFilterOptionsVisibility = jest.fn();

    configure({adapter: new Adapter()});
    return shallow(<FiltersList filters={filters}
                                onFilterChange={onFilterChange}
                                onChangeFilterOptionsVisibility={onChangeFilterOptionsVisibility}/>);
};

describe('FilterList Component', () => {
    it('should render', () => {
        const wrapper = setup();
        expect(wrapper.exists()).toBe(true);
    });

    it('should render two Dropdown Components', () => {
        const wrapper = setup();
        expect(wrapper.find('div').children(Dropdown).length).toBe(2);
    });
});