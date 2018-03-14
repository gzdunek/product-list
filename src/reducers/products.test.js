import {getFilteredProducts} from './products';

const allProducts = [
    {
        id: 1,
        productName: 'Torba 1X',
        categories: 'bags',
        description: 'Zwykła torba',
        variants: []
    },
    {
        id: 2,
        productName: 'Plecak 2X',
        categories: 'backpack',
        description: 'Zwykły plecak',
        variants: []
    }
];

describe('Products selector', () => {
    it('should return all elements', () => {
        expect(getFilteredProducts(allProducts, [])).toEqual(allProducts);
    });

    it('should return all elements (empty single filter)', () => {
        const filters = [
            {
                parameter: 'categories',
                values: []
            }
        ];

        expect(getFilteredProducts(allProducts, filters)).toEqual(allProducts);
    });

    it('should return one element', () => {
        const filters = [
            {
                parameter: 'categories',
                values: ['bags']
            }
        ];

        expect(getFilteredProducts(allProducts, filters)).toEqual([allProducts[0]]);
    });

    it('should return two elements', () => {
        const filters = [
            {
                parameter: 'categories',
                values: ['bags', 'backpack']
            }
        ];

        expect(getFilteredProducts(allProducts, filters))
            .toEqual([allProducts[0], allProducts[1]]);
    });

    it('should return one element (combined filter)', () => {
        const filters = [
            {
                parameter: 'categories',
                values: ['bags', 'backpack']
            },
            {
                parameter: 'productName',
                values: ['Torba 1X']
            }
        ];

        expect(getFilteredProducts(allProducts, filters)).toEqual([allProducts[0]]);
    });
});