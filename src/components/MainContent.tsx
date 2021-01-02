import React from 'react';
import { Switch, Route } from 'react-router-dom';

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
    return <h2>Home</h2>;
}

function Messages() {
    return <h2>Messages</h2>;
}

function Likes() {
    return <h2>Likes</h2>;
}

function Search() {
    return <h2>History</h2>;
}

function Settings() {
    return <h2>Settings</h2>;
}


export default MainContent;