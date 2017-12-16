import React from 'react';



import { NavMenu } from './NavMenu'
const Header = (props) => {
    return (
        <div className='col-md-12'>
            <NavMenu isLoggedIn={props.isLoggedIn}/>
        </div>
    );
};

export default Header;
