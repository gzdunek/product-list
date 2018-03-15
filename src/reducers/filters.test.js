import filters from './filters';
import {changeFilterVisibility} from '../actions';

describe('Filters reducer', () => {
    it('should return initial state, empty', () => {
        expect(filters(undefined, {})).toEqual([]);
    });

    it('should handle CHANGE_FILTER_VISIBILITY', () => {
        expect(filters([
            {
                displayedName: 'Category',
                name: 'category',
                isOpen: false,
                options: [
                    {
                        name: 'bag',
                    },
                    {
                        name: 'backpack',
                    }
                ]
            },
            {
                displayedName: 'Color',
                name: 'colors',
                isOpen: false,
                options: [
                    {
                        name: 'red',
                    },
                    {
                        name: 'blue',
                    }
                ]
            }
        ], changeFilterVisibility('category', true))).toEqual([
            {
                displayedName: 'Category',
                name: 'category',
                isOpen: true,
                options: [
                    {
                        name: 'bag',
                    },
                    {
                        name: 'backpack',
                    }
                ]
            },
            {
                displayedName: 'Color',
                name: 'colors',
                isOpen: false,
                options: [
                    {
                        name: 'red',
                    },
                    {
                        name: 'blue',
                    }
                ]
            }
        ]);
    });
});