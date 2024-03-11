import { Link } from "react-router-dom";

const ShipsListItem = ({ship}) => {
    return <div className="ships-item">
        <Link to={`/ships/${ship.id}`}>
            <img src={ship.image} alt={ship.name} />
            <div className="ships-article">
                <h2>{ship.name}</h2>
                <p>Home port: {ship.home_port}</p>
                <button className="learn-more">Learn more</button>
            </div>
        </Link>
    </div>;
};

export default ShipsListItem;