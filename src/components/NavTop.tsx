import React from 'react';
import { hideMenuOnScrollDown } from '../utils/utils';

export interface NavTopProps {

}

const NavTop: React.FunctionComponent<NavTopProps> = () => {
    hideMenuOnScrollDown()
    return (
        <nav className="nav" id="nav-top">
            {/* 
            The button will be either menu button (3 bars) or 
            left arrow back button 
            */}
            <button className="nav-top-left-menu-button">&#9776;</button>
            <h3 className="nav-top-main-title">PlaceHolder</h3>
        </nav>
    );
}

export default NavTop;