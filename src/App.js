import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import DialogContainer from "./components/Dialogs/DialogContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile />}/>
                    <Route path='/dialogs' render={() => <DialogContainer />}/>
                    <Route path='/users' render={() => <UsersContainer />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
