import filters from './filters';
import {changeFilterOpen} from '../actions';
import * as types from '../constants/actions';

describe('Filters reducer', () => {
    it('should return initial state, empty', () => {
        expect(filters(undefined, {})).toEqual([]);
    });

    it(`should handle ${types.CHANGE_FILTER_OPEN}`, () => {
        expect(filters([
            {
                displayedName: 'Category',
                name: 'category',
                isOpen: false,
                options: []
            },
            {
                displayedName: 'Color',
                name: 'colors',
                isOpen: false,
                options: []
            }
        ], changeFilterOpen('category', true))).toEqual([
            {
                displayedName: 'Category',
                name: 'category',
                isOpen: true,
                options: []
            },
            {
                displayedName: 'Color',
                name: 'colors',
                isOpen: false,
                options: []
            }
        ]);
    });
});