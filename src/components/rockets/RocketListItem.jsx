import { Link } from "react-router-dom";

const RocketsListItem = ({rocket}) => {
    return <Link to={`/rockets/${rocket.id}`} className="rockets-item">
                <div className="rockets-img-wrapper">
                    <img src={rocket.flickr_images[0]} alt={rocket.name} />
                </div>
                <h2>{rocket.name}</h2>
                <p>{rocket.description}</p>
            </Link>;
};

export default RocketsListItem;