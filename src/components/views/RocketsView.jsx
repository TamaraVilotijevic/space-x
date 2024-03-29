import api from "../../services/api";
import { useEffect, useContext } from "react";
import RocketsList from "../rockets/RocketsList";
import Loading from "../loading/Loading";
import Error from "../error/Error";
import { RocketsContext } from "../../context/RocketsContext";

const RocketsView = () => {
    const {state, dispatch} = useContext(RocketsContext);
    const {rockets, loading, error} = state;

    useEffect(() => {
        dispatch({type: 'FETCH_ROCKETS_REQUEST'});
        api.get('/rockets')
        .then(res => {
            dispatch({type: 'FETCH_ROCKETS_SUCCESS', payload: res.data});
        })
        .catch(error => {
            dispatch({type: 'FETCH_ROCKETS_ERROR', payload: error.response});
        })
    }, []);

    return <>
        <h1>Rockets</h1>
        {loading ? (<Loading />) : error ? (<Error error={error} />) : (<RocketsList rockets={rockets} />)}
    </>;
};

export default RocketsView;