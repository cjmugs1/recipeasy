// Header component displaying app's name, logo, and navigation links. Navigation links include: home, login, signup, logout, profile, and saved recipes

import React from 'react';

import Auth from '../../utils/auth';

import './header.css';


function HeaderComponent() {

    const handleLogout = () => {
        Auth.logout();
    };

    return (
        <header>
            <h1>
                <a data-testid="link" href="/">
                    Recipeasy.
                </a>
            </h1>
            <nav>
                <a className="login" data-testid="link" onClick={handleLogout}>
                    Logout
                </a>
            </nav>
        </header>
    );
};

export default HeaderComponent;