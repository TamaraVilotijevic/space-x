export const initialState = {
    rockets: [],
    loading: false,
    error: null,
};

const rocketsReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_ROCKETS_REQUEST':
            return {
                ...state,
                loading: true,
                error: null,
            };
        case 'FETCH_ROCKETS_SUCCESS':
            return {
                ...state,
                loading: false,
                rockets: action.payload,
            };
        case 'FETCH_ROCKETS_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
}

export default rocketsReducer;