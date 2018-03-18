import products, {getFilteredProducts} from './products';
import {changeProductVariant} from '../actions';
import * as types from '../constants/actions';

const allProducts = [
    {
        id: 1,
        productName: 'Torba 1X',
        colorsIds: [1, 2],
        categories: 'bags',
        description: 'Zwykła torba',
        displayedVariantId: 1,
        variants: [
            {
                id: 1,
                colorId: 1,
                imageUrl: 'http:xy.com',
                price: '115 PLN',
            },
            {
                id: 2,
                color: 2,
                imageUrl: 'http:xy.com',
                price: '125 PLN',
            }
        ]
    },
    {
        id: 2,
        productName: 'Plecak 2X',
        colorsIds: [1],
        categories: 'backpack',
        description: 'Zwykły plecak',
        displayedVariantId: 2,
        variants: [
            {
                id: 2,
                colorId: 1,
                imageUrl: 'http:xy.com',
                price: '250 PLN',
            },

        ]
    }
];

describe('Products selector', () => {
    it('should return all elements', () => {
        expect(getFilteredProducts(allProducts, {})).toEqual(allProducts);
    });

    it('should return all elements (empty single filter)', () => {
        const filters = {
            categories: [],
        };

        expect(getFilteredProducts(allProducts, filters)).toEqual(allProducts);
    });

    it('should return one element', () => {
        const filters = {
            categories: ['bags'],
        };

        expect(getFilteredProducts(allProducts, filters)).toEqual([allProducts[0]]);
    });

    it('should return two elements', () => {
        const filters = {
            categories: ['bags', 'backpack'],
        };

        expect(getFilteredProducts(allProducts, filters))
            .toEqual([allProducts[0], allProducts[1]]);
    });

    it('should return one element (combined filter)', () => {
        const filters = {
            categories: ['bags', 'backpack'],
            productName: ['Torba 1X'],
        };

        expect(getFilteredProducts(allProducts, filters)).toEqual([allProducts[0]]);
    });

    it('should return one element (combined filter, multivalue parameter filtered', () => {
        const filters = {
            categories: ['bags', 'backpack'],
            colorsIds: [2],
        };

        expect(getFilteredProducts(allProducts, filters)).toEqual([allProducts[0]]);

    });
});

describe('Products reducer', () => {
    it('should return initial state, empty', () => {
        expect(products(undefined, {})).toEqual([]);
    });

    it(`should handle ${types.CHANGE_PRODUCT_VARIANT}`, () => {
        expect(products(allProducts, changeProductVariant(1, 2))).toEqual(
            [
                {
                    ...allProducts[0],
                    displayedVariantId: 2,
                },
                allProducts[1],
            ]
        );
    });
});