export const initialState = {
    ships: [],
    loading: false,
    error: null,
};

const shipsReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SHIPS_REQUEST':
            return {
                ...state,
                loading: true,
                error: null,
            };
        case 'FETCH_SHIPS_SUCCESS':
            return {
                ...state,
                loading: false,
                ships: action.payload,
            };
        case 'FETCH_SHIPS_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
}

export default shipsReducer;