import api from "../../services/api";
import { useEffect, useState } from "react";
import ShipsList from "../ships/ShipsList";
import Loading from "../loading/Loading";
import Error from "../error/Error";

const ShipsView = () => {
    const [ships, setShips] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        api.get('/ships')
        .then(res => {
            setShips(res.data);
        })
        .catch(err => setError(true))
        .finally(() => setLoading(false));
    }, []);

    return <div>
        <h1>Ships</h1>
        {loading ? (<Loading />) : error ? (<Error />) : <ShipsList ships={ships} />}
    </div>;
};

export default ShipsView;