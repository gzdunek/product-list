import * as types from '../constants/actions';
import {changeFilterOpen, changeProductVariant} from './index';

describe('Change filter open state', () => {
    it('should create an action', () => {
        const filterName = 'color';
        const isOpen = true;

        const action = {
            type: types.CHANGE_FILTER_OPEN,
            filterName,
            isOpen
        };
        expect(changeFilterOpen(filterName, isOpen)).toEqual(action);
    });
});

describe('Change product variant', () => {
    it('should create an action', () => {
        const productId = 1345;
        const variantId = 23;

        const action = {
            type: types.CHANGE_PRODUCT_VARIANT,
            productId,
            variantId
        };
        expect(changeProductVariant(productId, variantId)).toEqual(action);
    });
});