import {useReducer, createContext} from 'react';
import shipsReducer from '../reducer/shipsReducer';
import { initialState } from '../reducer/shipsReducer';

export const ShipsContext = createContext();

const ShipsContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(shipsReducer, initialState);

    return <ShipsContext.Provider value={{state, dispatch}}>
        {children}
    </ShipsContext.Provider>
};

export default ShipsContextProvider;