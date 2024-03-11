import {ReactComponent as Logo} from '../../assets/SpaceX-Logo.svg';
import NavTabs from './NavTabs';
import {useNavigate} from 'react-router-dom';
import "./style.css";

const Navbar = () => {
    const navigate = useNavigate();
    return <div className="navbar">
        <Logo fill="white" onClick={() => navigate('/')} style={{ cursor: "pointer" }} />
        <NavTabs />
    </div>;
};

export default Navbar;