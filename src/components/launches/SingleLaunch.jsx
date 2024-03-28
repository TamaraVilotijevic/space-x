import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";
import Loading from "../loading/Loading";
import Error from "../error/Error";

const SingleLaunch = () => {
    const {launchId} = useParams();
    const navigate = useNavigate();
    const [launch, setLaunch] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        api.get(`/launches/${launchId}`)
        .then((res) =>{
            setLaunch(res.data);
        })
        .catch(err => setError(true))
        .finally(() => setLoading(false));
    }, []);

    const handleBack = () => {
        navigate(-1);
    }

    const date = new Date(launch.date_utc);
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();

    return <>
        {loading ? (<Loading />) : error ? (<Error />) : 
        (<div className="single-launch-wrapper">
                <div className="single-launch">
                    <h2>{launch.name}</h2>
                    <p>Launch date: {day}.{month}.{year}.</p>
                    <p>Flight number: {launch.flight_number}</p>
                    <p>{launch.details}</p>
                    <a href={launch.links.article} target="_blank">Read article</a>
                    <a href={launch.links.webcast} target="_blank">Watch on YouTube</a>
                    <button onClick={handleBack}>&#171; Back to launches</button>
                </div>
                <div>
                    <img src={launch.links.patch.small} alt={launch.name} />
                </div>
            </div>)}
    </>
};

export default SingleLaunch;