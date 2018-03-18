import React from 'react';
import {shallow} from 'enzyme';
import {configure} from 'enzyme/build/index';
import Adapter from 'enzyme-adapter-react-16/build/index';
import sinon from 'sinon';
import ProductVariants from './ProductVariants';

const setup = () => {
    const variants = [
        {
            id: 1,
            colorId: 3,
            imageUrl: 'x',
            price: '115 PLN',
        },
        {
            id: 2,
            colorId: 4,
            imageUrl: 'y',
            price: '125 PLN',
        }
    ];

    const onProductVariantClickStub = sinon.spy();

    configure({adapter: new Adapter()});
    const wrapper = shallow(<ProductVariants onVariantClick={onProductVariantClickStub} variants={variants}/>);

    return {
        wrapper,
        onProductVariantClickStub
    };
};

describe('ProductVariants Component', () => {
    it('should render', () => {
        const {wrapper} = setup();
        expect(wrapper.exists()).toBe(true);
    });

    it('should render 2 variant divs', () => {
        const {wrapper} = setup();
        expect(wrapper.find('div').children().length).toBe(2);
    });

    it('should fire onClick event with id=2', () => {
        const {wrapper, onProductVariantClickStub} = setup();
        wrapper.find('div').children().last().simulate('click');
        expect(onProductVariantClickStub.calledWith(2)).toBe(true);
    });
});