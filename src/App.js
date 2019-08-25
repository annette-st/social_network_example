import React from 'react';
import logo from './logo.svg';
import './App.css';


const App = () => {
  return (
    <div className='app-wrapper'>
        <header className='header'>
            header
        </header>
        <nav className='nav'>
            <div>Profile</div>
            <div>Messages</div>
            <div>News</div>
            <div>Music</div>
        </nav>
        <div className='content'>
            Main content
        </div>
    </div>
  );
}


export default App;
