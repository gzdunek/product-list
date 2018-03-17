import React from 'react';
import {shallow} from 'enzyme';
import {configure} from 'enzyme/build/index';
import Adapter from 'enzyme-adapter-react-16/build/index';
import Product from './Product';
import ProductVariants from './ProductsVariants/ProductVariants';

const setup = () => {
    const product = {
        id: 1,
        productName: 'Week(ender)',
        category: 'bag',
        description: 'Zwykła torba',
        colors: ['red', 'blue'],
        displayedVariantId: 1,
        variants: [
            {
                id: 1,
                color: 'red',
                imageUrl: 'x',
                price: '115 PLN',
            },
            {
                id: 2,
                color: 'blue',
                imageUrl: 'y',
                price: '125 PLN',
            }
        ]
    };
    const onProductVariantClick = jest.fn();

    configure({adapter: new Adapter()});
    return shallow(<Product onProductVariantClick={onProductVariantClick} {...product}/>);
};

describe('Product Component', () => {
    it('should render', () => {
        const wrapper = setup();
        expect(wrapper.exists()).toBe(true);
    });

    it('should render ProductVariant Component', () => {
        const wrapper = setup();
        expect(wrapper.find(ProductVariants).exists()).toBe(true);
    });
});