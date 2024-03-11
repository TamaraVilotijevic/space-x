import LaunchesListItem from "./LaunchesListItem";
import './launches.css';

const LaunchesList = ({launches}) => {

    return <div className="launches-wrapper">
        {launches.map(launch => <LaunchesListItem key={launch.id} launch={launch} />)}
    </div>;
};

export default LaunchesList;