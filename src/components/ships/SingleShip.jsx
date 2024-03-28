import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";
import Error from "../error/Error";
import Loading from "../loading/Loading";

const SingleShip = () => {
    const {shipId} = useParams();
    const navigate = useNavigate();
    const [ship, setShip] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        api.get(`/ships/${shipId}`)
        .then((res) => {
            setShip(res.data);
        })
        .catch(err => setError(true))
        .finally(() => setLoading(false));
    }, []);

    const handleBack = () => {
        navigate(-1);
    };

    return <>
        {loading ? (<Loading />) : error ? (<Error />) :
        (<div className="single-ship-wrapper">
            <div className="single-ship-info">
                <h2>{ship.name}</h2>
                <p><b>Built in {ship.year_built}</b></p>
                <p><b>Home port:</b> {ship.home_port}</p>
                <p><b>Type:</b> {ship.type}</p>
                <p><b>Mass:</b> {ship.mass_kg} kg</p>
                <a href={ship.link} target="_blank">Read more</a>
                <button onClick={handleBack}>&#171; Back to ships</button>
            </div>
            <div className="single-ship-img">
                <img src={ship.image} alt={ship.name} />
            </div>
        </div>)}
    </>;
};

export default SingleShip;