import React from 'react';
import {shallow} from 'enzyme';
import {configure} from 'enzyme/build/index';
import Adapter from 'enzyme-adapter-react-16/build/index';
import ProductsList from './ProductsList';
import Product from './Product/Product';

const setup = () => {
    const products = [
        {
            id: 1,
            productName: 'Week(ender)',
            category: 'bag',
            description: 'Zwykła torba',
            colorsIds: [1, 2],
            displayedVariantId: 1,
            variants: [
                {
                    id: 1,
                    colorId: 2,
                    imageUrl: 'x',
                    price: '115 PLN',
                },
                {
                    id: 2,
                    colorId: 3,
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
            colorsIds: [1, 2],
            displayedVariantId: 3,
            variants: [
                {
                    id: 3,
                    colorId: 3,
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