import { Link } from "react-router-dom";

const RocketsListItem = ({rocket}) => {
    return <div className="rockets-item">
            <Link to={`/rockets/${rocket.id}`}>
                <img src={rocket.flickr_images[0]} alt={rocket.name} />
                <div className="rockets-article">
                    <h2>{rocket.name}</h2>
                    <p>{rocket.description}</p>
                </div>
            </Link>
        </div>
};

export default RocketsListItem;