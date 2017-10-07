import React from 'react';
import { NavLink } from "react-router-dom";

export const NavMenu = () => {
    return (
        <div>
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">Navbar</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"><NavLink className="nav-link" exact activeClassName="active" to="/">Home</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" activeClassName='active' to={"/users/"}>Users</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" activeClassName='active' to={"/protected/"}>Protected</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" activeClassName='active' to={"/form/"}>Form</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" activeClassName='active' to={"/toastex/"}>Toast Ex</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" activeClassName='active' to={"/bharatProp/"}>Bharat Prop</NavLink></li>

                    </ul>
                </div>
            </nav>

        </div>
    );
};
