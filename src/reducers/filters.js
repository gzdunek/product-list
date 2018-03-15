const filters = (state = [], action) => {
    switch (action.type) {
        case 'CHANGE_FILTER_VISIBILITY':
            const newState = [...state];
            newState.forEach(filter => {
                filter.isOpen = false;
                if (filter.name === action.filterName) {
                    filter.isOpen = action.isOpen;
                }
            });
            return newState;
        default:
            return state;
    }
};

export default filters;