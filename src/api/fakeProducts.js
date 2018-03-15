export const FakeProducts = {
    products: [
        {
            id: 1,
            productName: 'Torba 1X',
            category: 'bag',
            description: 'Zwykła torba',
            colors: ['red', 'blue'],
            visibleVariant: 1,
            variants: [
                {
                    id: 1,
                    color: 'red',
                    imageUrl: 'https://d3pomqg3gz7350.cloudfront.net/spree/images/attachments/000/001/468/plp/Domino-Aviator-PLP2.png?1506357649',
                    price: '115 PLN',
                    inStock: true
                },
                {
                    id: 2,
                    color: 'Scuba',
                    imageUrl: '',
                    price: '125 PLN',
                    inStock: true
                }
            ]
        },
        {
            id: 2,
            productName: 'Plecak 2X',
            category: 'backpack',
            description: 'Zwykły plecak',
            colors: ['red'],
            visibleVariant: 3,
            variants: [
                {
                    id: 3,
                    color: 'blue',
                    imageUrl: 'https://d3pomqg3gz7350.cloudfront.net/spree/images/attachments/000/001/468/plp/Domino-Aviator-PLP2.png?1506357649',
                    price: '250 PLN',
                    inStock: true
                },

            ]
        }
    ]
};