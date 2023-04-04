import React from 'react';
import ActiveLink from './ActiveLink';

const Header = () => {
    return (
        <nav>
            <ActiveLink to='/'>Home</ActiveLink>
            <ActiveLink to='/menu'>Menu</ActiveLink>
            <ActiveLink to='/search'>Search</ActiveLink>
            <ActiveLink to='/cart'>Cart</ActiveLink>
        </nav>
    );
};

export default Header;