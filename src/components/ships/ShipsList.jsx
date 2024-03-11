import ShipsListItem from "./ShipsListItem";
import './ships.css';

const ShipsList = ({ships}) => {
    const filteredShips = ships.filter(ship => ship.image !== null);
    return <div className="ships-wrapper">
        {filteredShips.map(ship => <ShipsListItem key={ship.id} ship={ship} />)}
    </div>;
};

export default ShipsList;