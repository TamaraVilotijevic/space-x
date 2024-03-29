import api from "../../services/api";
import { useEffect, useContext } from "react";
import ShipsList from "../ships/ShipsList";
import Loading from "../loading/Loading";
import Error from "../error/Error";
import { ShipsContext } from "../../context/ShipsContext";

const ShipsView = () => {
    const {state, dispatch} = useContext(ShipsContext);
    const {ships, loading, error} = state;

    useEffect(() => {
        dispatch({type: 'FETCH_SHIPS_REQUEST'});
        api.get('/ships')
        .then(res => {
            dispatch({type: 'FETCH_SHIPS_SUCCESS', payload: res.data});
        })
        .catch(error => {
            dispatch({type: 'FETCH_SHIPS_ERROR', payload: error.response});
        })
    }, []);

    return <>
        <h1>Ships</h1>
        {loading ? (<Loading />) : error ? (<Error error={error} />) : (<ShipsList ships={ships} />)}
    </>;
};

export default ShipsView;