import * as serviceWorker from './serviceWorker';
import store from './components/redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import StoreContext from "./store-context";
import {Provider} from "react-redux";

// let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root'));
// }

// rerenderEntireTree(store.getState());
//
// store.subscribe(() => {
//     let state = store.getState();
//     rerenderEntireTree(state);
// });


serviceWorker.unregister();
