import {Link} from 'react-router-dom';

const NavTabsItem = ({value}) => {
    return <>
        <Link to={value}>{value}</Link>
    </>;
};

export default NavTabsItem;