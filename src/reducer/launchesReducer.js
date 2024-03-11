export const initialState = {
    launches: [],
    loading: false,
    error: null,
};

const launchesReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_LAUNCHES_REQUEST':
            return {
                ...state,
                loading: true, 
                error: null,
            };
        case 'FETCH_LAUNCHES_SUCCESS':
            return {
                ...state,
                loading: false,
                launches: action.payload,
            };
        case 'FETCH_LAUNCHES_ERROR':
            return {
                ...state, 
                loading: false,
                error: action.payload,
            };
    
        default:
            return state;
    }
};

export default launchesReducer;