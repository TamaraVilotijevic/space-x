import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";
import Error from "../error/Error";
import Loading from "../loading/Loading";

const SingleRocket = () => {
    const {rocketId} = useParams();
    const navigate = useNavigate();
    const [rocket, setRocket] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        api.get(`/rockets/${rocketId}`)
        .then((res) => {
            console.log(res.data);
            setRocket(res.data);
        })
        .catch(err => setError(true))
        .finally(() => setLoading(false));
    }, []);

    const handleBack = () => {
        navigate(-1);
    };

    return <>
        {loading ? (<Loading />) : error ? (<Error />) : 
        (<div className="single-rocket-wrapper">
            <div className="single-rocket-info">
                <h2>{rocket.name}</h2>
                <p><b>First flight:</b> {rocket.first_flight}</p>
                <div className="left-right-wrapper">
                    <div className="left">
                        <p><b>Company:</b> {rocket.company}</p>
                        <p><b>Success rate:</b> {rocket.success_rate_pct}%</p>
                        <p><b>Cost per launch:</b> {rocket.cost_per_launch} USD</p>
                        <p><b>Country:</b> {rocket.country}</p>
                    </div>
                    <div className="right">
                        <p><b>Stages:</b> {rocket.stages}</p>
                        <p><b>Height:</b> {rocket.height.meters} m</p>
                        <p><b>Diameter:</b> {rocket.diameter.meters} m</p>
                        <p><b>Mass:</b> {rocket.mass.kg} kg</p>
                    </div>
                </div>
                <p>{rocket.description}</p>
                <a href={rocket.wikipedia} target="_blank">Read on Wiki</a>
                <button onClick={handleBack}>&#171; Back to rockets</button>
            </div>
            <div className="img-wrapper">
                <img src={rocket.flickr_images[1]} alt={rocket.name} />
            </div>
        </div>)}
    </>;
};

export default SingleRocket;