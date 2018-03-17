import React from 'react';
import {shallow} from 'enzyme';
import {configure} from 'enzyme/build/index';
import Adapter from 'enzyme-adapter-react-16/build/index';
import sinon from 'sinon';
import DropdownOption from './DropdownOption';

const setup = () => {
    const option = {
        name: 'bag',
    };

    const onOptionClickStub = sinon.spy();

    configure({adapter: new Adapter()});
    const wrapper = shallow(<DropdownOption onOptionClick={onOptionClickStub} option={option}/>);
    return {
        wrapper,
        onOptionClickStub,
    };
};

describe('DropdownOption Component', () => {
    it('should render', () => {
        const {wrapper} = setup();
        expect(wrapper.exists()).toBe(true);
    });

    it('should fire onOptionClick', function () {
        const {wrapper, onOptionClickStub} = setup();
        wrapper.find('div').find('input').simulate('change', {target: {checked: true}});
        expect(onOptionClickStub.calledWith(true)).toBe(true);
    });
});