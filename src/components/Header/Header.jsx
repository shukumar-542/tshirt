import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/review'>Order Review</Link>
            <Link to='/'>Home</Link>
        </nav>
    );
};

export default Header;