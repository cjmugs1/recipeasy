// component to toggle between light and dark theme

import React, { useContext } from 'react';
import { Switch } from 'antd';
import { ThemeContext } from '../../context/ThemeContext';
import './themeToggle.css';
import 'antd/dist/antd.css';


const ThemeToggle = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const onThemeChange = (toggle) => {
        setTheme(toggle ? 'dark' : 'light');
    };

    return (
        <div className="theme-toggle">
            <Switch
            checked={theme === 'dark'}
            onChange={onThemeChange}
            className="theme-switch"
            />
        </div>
    );
};

export default ThemeToggle;

