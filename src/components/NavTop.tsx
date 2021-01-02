import React from 'react';

export interface NavTopProps {

}

const NavTop: React.FunctionComponent<NavTopProps> = () => {
    return (
        <nav className="nav" id="nav-top">
            <button id="nav-top-menu-button">&#9776;</button>
            <div>PlaceHolderForSomething</div>
        </nav>
    );
}

export default NavTop;