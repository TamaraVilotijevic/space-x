import RocketsListItem from "./RocketListItem";
import './rockets.css';

const RocketsList = ({rockets}) => {
    return <div className="rockets-wrapper">
        {rockets.map(rocket => <RocketsListItem rocket={rocket} key={rocket.id} />)}
    </div>;
};

export default RocketsList;