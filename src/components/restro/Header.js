import React from 'react';
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
                                    Select your order
                                </div>
                            </nav>
                        </div>
                </div>
            </div>
        </div>
    );
};
