import React from 'react';
import { hideMenuOnScrollDown } from '../utils/utils';
import { useHistory } from 'react-router-dom';

export interface NavTopProps {

}

const NavTop: React.FunctionComponent<NavTopProps> = () => {
    hideMenuOnScrollDown()
    const history = useHistory();
    const { pathname } = history.location;
    const menuChoice = pathname.split('/')
    return (
        <nav className="nav" id="nav-top">
            {console.log("menuChoice", menuChoice)}
            {/* {console.log("history.goBack", history.goBack())} */}
            {/* 
            The button will be either menu button (3 bars) or 
            left arrow back button 
            */}
            {menuChoice.length > 2 ? (
                <button onClick={history.goBack} className="nav-top-left-menu-button">&#10094;</button>
            ) : (<button className="nav-top-left-menu-button">&#9776;</button>)}

            <h3 className="nav-top-main-title">PlaceHolder</h3>
        </nav>
    );
}

export default NavTop;