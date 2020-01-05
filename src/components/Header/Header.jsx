import React from 'react';
import s from './Header.module.css';
import logo from '../../assets/img/logo.png'

const Header = () => {
    return (
        <header className={s.header}>
              <img height='45px' width='50px' src={logo} />
        </header>
    );
}

export default Header;


