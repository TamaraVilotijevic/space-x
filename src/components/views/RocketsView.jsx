import api from "../../services/api";
import { useEffect, useState } from "react";
import RocketsList from "../rockets/RocketsList";
import Loading from "../loading/Loading";
import Error from "../error/Error";

const RocketsView = () => {
    const [rockets, setRockets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        api.get('/rockets')
        .then(res => {
            console.log(res.data);
            setRockets(res.data);
        })
        .catch(err => setError(true))
        .finally(() => setLoading(false));
    }, []);

    return <div>
        <h1>Rockets</h1>
        <div>
        {loading ? (<Loading />) : error ? (<Error />) : <RocketsList rockets={rockets} />}
        </div>
    </div>;
};

export default RocketsView;