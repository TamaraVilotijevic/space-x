import api from "../../services/api";
import { useEffect, useContext } from "react";
import LaunchesList from "../launches/LaunchesList.jsx";
import Loading from "../loading/Loading.jsx";
import Error from "../error/Error.jsx";
import { LaunchesContext } from "../../context/LaunchesContext.js";

const LaunchesView = () => {
    const {state, dispatch} = useContext(LaunchesContext);
    const {launches, loading, error} = state;

    useEffect(() => {
        dispatch({type: 'FETCH_LAUNCHES_REQUEST'});
        api.get('/launches')
        .then(res => {
            dispatch({type: 'FETCH_LAUNCHES_SUCCESS', payload: res.data.slice(0,20)});
        })
        .catch(error => {
            dispatch({type: 'FETCH_LAUNCHES_ERROR', payload: error.response})
        })
    }, []);

    return <>
        <h1>Launches</h1>
        {loading ? (<Loading />) : error ? (<Error error={error} />) : (<LaunchesList launches={launches} />)}
    </>;
};

export default LaunchesView;