import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import MainContent from './components/MainContent';
import NavBottom from './components/NavBottom';
import NavTop from './components/NavTop';
import "./styles/App.scss";
import "./styles/Navs.scss";

const App = () => {
    const routeMatch = useRouteMatch()
    useEffect(() => {
        return () => {
        }
    }, [routeMatch])
    return (
        <div className="App">
            {/* Top Nav */}
            <NavTop />
            {/* Main content */}
            <MainContent />
            {/* Bottom Nav */}
            <NavBottom />
        </div>
    );
}

App.displayName = "App";

export default App;