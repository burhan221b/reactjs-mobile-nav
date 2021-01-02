import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import GearIcon from '../assets/iconfinder_gear-setting-set-configure-configuration_3643771.svg'
import LikesIcon from '../assets/iconfinder_heart-love-like-likes-loved-favorite_3643770.svg';
import HomeIcon from '../assets/iconfinder_house-home-main-menu-start-building_3643769.svg';
import SearchIcon from '../assets/iconfinder_magnifying-glass-search-zoom-find_3643762.svg';
import MessagesIcon from '../assets/iconfinder_open-envelope-mail-message-email_3643756.svg';


export interface NavBottomProps {

}

const NavBottom: React.FunctionComponent<NavBottomProps> = () => {
    const history = useHistory();
    const { pathname } = history.location;
    return (
        <nav className="nav" id="nav-bottom">
            {console.log("pathname", pathname)}
            {/* <a><div><img src={homeIcon} className="menu-icons" /></div></a>
            <a><div><img src={likesIcon} className="menu-icons" /></div></a>
            <a><div><img src={searchIcon} className="menu-icons" /></div></a>
            <a><div><img src={messagesIcon} className="menu-icons" /></div></a>
            <a><div><img src={gearIcon} className="menu-icons cls-1" /></div></a> */}
            <Link to={`/`} className="link-menu-icons"><div><HomeIcon className={`menu-icons ${pathname === '/' ? 'active' : ''}`} /></div></Link>
            <Link to={`/likes`} className="link-menu-icons"><div><LikesIcon className={`menu-icons ${pathname === '/likes' ? 'active' : ''}`} /></div></Link>
            <Link to={`/search`} className="link-menu-icons"><div><SearchIcon className={`menu-icons ${pathname === '/search' ? 'active' : ''}`} /></div></Link>
            <Link to={`/messages`} className="link-menu-icons"><div><MessagesIcon className={`menu-icons ${pathname === '/messages' ? 'active' : ''}`} /></div></Link>
            <Link to={`/settings`} className="link-menu-icons"><div><GearIcon className={`menu-icons ${pathname === '/settings' ? 'active' : ''}`} /></div></Link>
        </nav>
    );
}

export default NavBottom;