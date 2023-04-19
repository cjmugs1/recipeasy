// header component displaying app's name, logo, and navigation links
// navigation links include: home, login, signup, logout, profile, and saved recipes
import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import './header.css';
export const HeaderComponent = () => {
    const handleLogout = () => {
        Auth.logout();
    };

    return (
        <header>
        <h1>
            <a data-testid="link" href="/">
            {/* <span role="img" aria-label="recipeasy">🍳</span> */}
            Recipeasy.
            </a>
        </h1>
        <nav>
            {/* <ul className="flex-row">
            <li className="mx-2"> */}
                <a className="login" data-testid="link" onClick={handleLogout}>
                Logout
                </a>
            {/* </li> */}
            {/* <li className="mx-2">
                <a data-testid="link" href="/signup">
                Signup
                </a>
            </li> */}
            {/* </ul> */}
        </nav>
        </header>
    );
};
export default HeaderComponent;