import React, {Component} from 'react';
import {connect} from 'react-redux';

import './menuContainer.css';

import {Header} from '../../components/restro/Header';
import ItemListContainer from './ItemListContainer';
import {CONSTANTS} from '../../constants';

import {setMenuList, setOrder} from '../../actions/restroActions';

class MenuContainer extends Component {
    constructor(props) {
        super();
    }
    componentWillMount() {
        fetch(CONSTANTS.api.restro.itemList).then((res) => res.json()).then((res) => {
            if (res.success) {
                this.props.setMenuList(res.data);
            }
        }).catch(error => {
            console.error(error);
        });
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
const mapStateToProps = (state) => ({restro: state.restro});
const mapDispatchToProps = (dispatch) => ({
    setMenuList: (data) => {
        dispatch(setMenuList(data))
    },
    setOrder: (data) => {
        dispatch(setOrder(data));
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
