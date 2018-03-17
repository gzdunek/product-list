import React from 'react';
import {shallow} from 'enzyme';
import {configure} from 'enzyme/build/index';
import Adapter from 'enzyme-adapter-react-16/build/index';
import ProductsList from './ProductsList';
import Product from './Product';

const setup = () => {
    const products = [
        {
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
        },
        {
            id: 2,
            productName: 'Plecak 2X',
            category: 'backpack',
            description: 'Zwykły plecak',
            colors: ['blue'],
            displayedVariantId: 3,
            variants: [
                {
                    id: 3,
                    color: 'blue',
                    imageUrl: 'z',
                    price: '250 PLN',
                },

            ]
        },
    ];
    const onProductVariantClick = jest.fn();

    configure({adapter: new Adapter()});
    return shallow(<ProductsList products={products} onProductVariantClick={onProductVariantClick}/>);
};

describe('ProductsList Component', () => {
    it('should render', () => {
        const wrapper = setup();
        expect(wrapper.exists()).toBe(true);
    });

    it('should render two Product Components', () => {
        const wrapper = setup();
        expect(wrapper.find(Product).length).toBe(2);
    });
});