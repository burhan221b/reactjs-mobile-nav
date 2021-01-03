import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

export interface MainContentProps {

}

const MainContent: React.FunctionComponent<MainContentProps> = () => {
    return (
        <main id="main-content">
            <Switch>
                <Route path="/settings">
                    <Settings />
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
                <Route path="/messages">
                    <Messages />
                </Route>
                <Route path="/likes">
                    <Likes />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
            <h1>hello world</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores cumque mollitia non quisquam! Aperiam eius praesentium accusantium officia quaerat. In neque asperiores eligendi aliquam error ipsa rerum atque, quo numquam.</p>
            <h1>hello world</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores cumque mollitia non quisquam! Aperiam eius praesentium accusantium officia quaerat. In neque asperiores eligendi aliquam error ipsa rerum atque, quo numquam.</p>
            <h1>hello world</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores cumque mollitia non quisquam! Aperiam eius praesentium accusantium officia quaerat. In neque asperiores eligendi aliquam error ipsa rerum atque, quo numquam.</p>
            <h1>hello world</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores cumque mollitia non quisquam! Aperiam eius praesentium accusantium officia quaerat. In neque asperiores eligendi aliquam error ipsa rerum atque, quo numquam.</p>
            <h1>hello world</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores cumque mollitia non quisquam! Aperiam eius praesentium accusantium officia quaerat. In neque asperiores eligendi aliquam error ipsa rerum atque, quo numquam.</p>
            <h1>hello world</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores cumque mollitia non quisquam! Aperiam eius praesentium accusantium officia quaerat. In neque asperiores eligendi aliquam error ipsa rerum atque, quo numquam.</p>
            <h1>hello world</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores cumque mollitia non quisquam! Aperiam eius praesentium accusantium officia quaerat. In neque asperiores eligendi aliquam error ipsa rerum atque, quo numquam.</p>
            <h1>hello world</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores cumque mollitia non quisquam! Aperiam eius praesentium accusantium officia quaerat. In neque asperiores eligendi aliquam error ipsa rerum atque, quo numquam.</p>
            <h1>hello world</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores cumque mollitia non quisquam! Aperiam eius praesentium accusantium officia quaerat. In neque asperiores eligendi aliquam error ipsa rerum atque, quo numquam.</p>
            <h1>hello world</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores cumque mollitia non quisquam! Aperiam eius praesentium accusantium officia quaerat. In neque asperiores eligendi aliquam error ipsa rerum atque, quo numquam.</p>
            <h1>hello world</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores cumque mollitia non quisquam! Aperiam eius praesentium accusantium officia quaerat. In neque asperiores eligendi aliquam error ipsa rerum atque, quo numquam.</p>
            <h1>hello world</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores cumque mollitia non quisquam! Aperiam eius praesentium accusantium officia quaerat. In neque asperiores eligendi aliquam error ipsa rerum atque, quo numquam.</p>
            <h1>hello world</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores cumque mollitia non quisquam! Aperiam eius praesentium accusantium officia quaerat. In neque asperiores eligendi aliquam error ipsa rerum atque, quo numquam.</p>
            <h1>hello world</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores cumque mollitia non quisquam! Aperiam eius praesentium accusantium officia quaerat. In neque asperiores eligendi aliquam error ipsa rerum atque, quo numquam.</p>
            <h1>hello world</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores cumque mollitia non quisquam! Aperiam eius praesentium accusantium officia quaerat. In neque asperiores eligendi aliquam error ipsa rerum atque, quo numquam.</p>

        </main>
    );
}

// Test Components below
function Home() {
    return (<>
        <h2>Home</h2>
    </>);
}

function Messages() {
    return (<>
        <h2>Messages</h2>
        <Link to='/messages/article'>LINK TEST</Link>
    </>);
}

function Likes() {
    return (<>
        <h2>Likes</h2>
        <Link to='/likes/article'>LINK TEST</Link>
    </>);
}

function Search() {
    return (<>
        <h2>Search</h2>
        <Link to='/search/article'>LINK TEST</Link>
    </>);
}

function Settings() {
    return (<>
        <h2>Settings</h2>
        <Link to='/settings/article'>LINK TEST</Link>
    </>);
}


export default MainContent;