import {ReactComponent as Logo} from '../../assets/SpaceX-Logo.svg';
import { CgMenu } from "react-icons/cg";
// import NavTabs from './NavTabs';
import NavTabsItem from "./NavTabsItem";
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import "./navbar.css";

const Navbar = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return <>
    <div className="navbar">
        <Logo className="logo" fill="white" onClick={() => navigate('/')} />
        <div className='navtabs-wrapper'>
            <NavTabsItem value="Launches" />
            <NavTabsItem value="Rockets" />
            <NavTabsItem value="Ships" />
        </div>
        <CgMenu className="nav-icon" onClick={toggleMenu} />
    </div>
   {menuOpen ? 
        (<div className='navtabs-open'>
            <NavTabsItem value="Launches" />
            <NavTabsItem value="Rockets" />
            <NavTabsItem value="Ships" />
        </div>) 
    : null}
    </>;
};

export default Navbar;