import "./navbar.css";
import NavTabsItem from "./NavTabsItem";

const NavTabs = () => {
    return <div>
        <NavTabsItem value="Launches" />
        <NavTabsItem value="Rockets" />
        <NavTabsItem value="Ships" />
    </div>;
};

export default NavTabs;