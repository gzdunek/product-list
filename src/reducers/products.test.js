import {getFilteredProducts} from './products';

const allProducts = [
    {
        id: 1,
        productName: 'Torba 1X',
        colors: ['red', 'blue'],
        categories: 'bags',
        description: 'Zwykła torba',
        variants: []
    },
    {
        id: 2,
        productName: 'Plecak 2X',
        colors: ['red'],
        categories: 'backpack',
        description: 'Zwykły plecak',
        variants: []
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
            // categories: ['bags', 'backpack'],
            colors: ['blue'],
        };

        expect(getFilteredProducts(allProducts, filters)).toEqual([allProducts[0]]);

    })
});