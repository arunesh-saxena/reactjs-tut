import React from 'react';
import {  NavLink } from "react-router-dom";
export const NavMenu = () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                        <li><NavLink activeClassName='active' to={"/users/"}>Users</NavLink></li>
                        <li><NavLink activeClassName='active' to={"/protected/"}>Protected</NavLink></li>
                        <li><NavLink activeClassName='active' to={"/form/"}>Form</NavLink></li>
                        <li><NavLink activeClassName='active' to={"/toastex/"}>Toast Ex</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};



/* import React from 'react';
import {  NavLink } from "react-router-dom";
export const NavMenu = () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                        <li><NavLink activeClassName='active' to={"/users/"}>Users</NavLink></li>
                        <li><NavLink activeClassName='active' to={"/protected/"}>Protected</NavLink></li>
                        <li><NavLink activeClassName='active' to={"/form/"}>Form</NavLink></li>
                        <li><NavLink activeClassName='active' to={"/toastex/"}>Toast Ex</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}; */
