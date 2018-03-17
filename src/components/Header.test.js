import React from 'react';
import {shallow} from 'enzyme';
import {configure} from 'enzyme/build/index';
import Adapter from 'enzyme-adapter-react-16/build/index';
import Header from './Header';

const setup = () => {
    configure({adapter: new Adapter()});
    return shallow(<Header/>);
};

describe('Header Component', () => {
    it('should render', () => {
        const wrapper = setup();
        expect(wrapper.exists()).toBe(true);
    });
});