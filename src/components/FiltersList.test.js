import React from 'react';
import {shallow} from 'enzyme';
import {configure} from 'enzyme/build/index';
import Adapter from 'enzyme-adapter-react-16/build/index';
import FiltersList from './FiltersList';
import Dropdown from './Dropdown';

const setup = () => {
    const filters = [
        {
            displayedName: 'Category',
            name: 'category',
            isOpen: false,
            options: [
                {
                    name: 'bag',
                },
                {
                    name: 'backpack',
                }
            ]
        },
        {
            displayedName: 'Color',
            name: 'colors',
            isOpen: false,
            options: [
                {
                    name: 'red',
                },
                {
                    name: 'blue',
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

    it('should render two Dropdown Components', function () {
        const wrapper = setup();
        expect(wrapper.find('div').children(Dropdown).length).toBe(2);
    });
});