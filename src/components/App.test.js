import React from 'react';
import {shallow} from 'enzyme';
import {configure} from 'enzyme/build/index';
import Adapter from 'enzyme-adapter-react-16/build/index';
import App from './App';

const setup = () => {
    configure({adapter: new Adapter()});
    return shallow(<App/>);
};

describe('App Compnent', () => {
    it('should render', () => {
        const wrapper = setup();
        expect(wrapper.exists()).toBe(true);
    });
});