import React from 'react';

import { NavMenu } from './NavMenu';

export class Header extends React.Component {
    constructor(props) {
        super();
        this.toggleNavHandeler = this.toggleNavHandeler.bind(this);
        this.state = {
            showNav: false
        }
    }
    toggleNavHandeler() {
        console.log('toggleNavHandeler')
        this.setState({
            showNav: !this.state.showNav
        })
    }
    render() {
        return (
            <div className='col-md-12'>
                <NavMenu isLoggedIn={this.props.isLoggedIn} showNav={this.state.showNav} toggleNav={this.toggleNavHandeler}/>
            </div>
        );

    }
};

export default Header;
