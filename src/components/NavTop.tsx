import React from 'react';
import { hideMenuOnScrollDown } from '../utils/utils';

export interface NavTopProps {

}

const NavTop: React.FunctionComponent<NavTopProps> = () => {
    hideMenuOnScrollDown()
    return (
        <nav className="nav" id="nav-top">
            <button className="nav-top-left-menu-button">&#9776;</button>
            <h2 className="nav-top-main-title">PlaceHolderForSomething</h2>
        </nav>
    );
}

export default NavTop;