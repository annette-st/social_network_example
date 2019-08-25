import * as serviceWorker from './serviceWorker';
import store from './components/redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={store.addPost.bind(store)} updateNewPost={store.updateNewPost.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root'));
}

store.subscribe(rerenderEntireTree);

rerenderEntireTree(store.getState());

serviceWorker.unregister();
