import React from 'react';
import { NavLink } from "react-router-dom";

export const NavMenu = (props) => {
    return (
        <div>
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                <button
                    className="navbar-toggler navbar-toggler-right"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={props.toggleNav}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="">Navbar</a>
                <div className={`collapse navbar-collapse ${props.showNav ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/users/"}>Users</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/protected/"}>Protected</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/form/"}>Form</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/toastex/"}>Toast Ex</NavLink>
                        </li>

                        {props.isLoggedIn
                            ? <li className="nav-item">
                                <NavLink className="nav-link" to={"/logout/"}>LogOut</NavLink>
                            </li>
                            : <li className="nav-item">
                                <NavLink className="nav-link" to={"/login/"}>Login</NavLink>
                            </li>}

                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/socket/"}>Socket</NavLink>
                        </li>
                        <li className="nav-item">
                            {/* <NavLink className="nav-link"  to='/restro/'>Restro</NavLink> */}
                            <a className="nav-link" href='/restro/'>Restro</a>
                        </li>

                    </ul>
                </div>
            </nav>

        </div>
    );
};
