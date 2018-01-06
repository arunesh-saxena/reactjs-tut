import React from 'react';
import {NavLink} from 'react-router-dom';
import "./Header.css";

export const Header = (props) => {
    return (
        <div>
            <div className='row'>
                <div className='header-fixed'>
                    <div className="container ">
                        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                            <div className="navbar-brand mb-0 h1">Restro</div>
                            <div className="header-text navbar-text mb-0 h3">
                                {props.title}
                            </div>
                            <NavLink className="nav-link" exact activeClassName="active" to='/restro/menu'>menu</NavLink>
                            <NavLink className="nav-link" exact activeClassName="active" to='/restro/menu/upload'>upload</NavLink>
                            <NavLink className="nav-link" exact activeClassName="active" to='/restro/order/status/1'>order</NavLink>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};
