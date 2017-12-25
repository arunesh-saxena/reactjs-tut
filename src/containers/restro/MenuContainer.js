import React, {Component} from 'react';
// import {connect} from 'react-redux';

import './menuContainer.css';

import {Header} from '../../components/restro/Header';
import ItemListContainer from './ItemListContainer';

class MenuContainer extends Component {
    constructor(props) {
        super();
        console.log('menu container')
    }

    render = () => {
        return (
            <div>
                <div className="container">
                    <Header title='Select Your Order'/>
                    <div className='body-padding-top'>
                        <ItemListContainer {...this.props}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuContainer;