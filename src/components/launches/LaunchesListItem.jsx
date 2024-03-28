import { Link } from "react-router-dom";

const LaunchesListItem = ({launch}) => {
    return <Link to={`/launches/${launch.id}`} className="launches-item">
        <h2>{launch.name}</h2>
        <img src={launch.links.patch.small} alt={launch.name} />
        <p>{launch.details}</p>
    </Link>;
};

export default LaunchesListItem;