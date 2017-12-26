import React, {Component} from 'react';
import {connect} from 'react-redux';

import './itemListContainer.css';

import ItemList from '../../components/restro/ItemList';
import OrderReviewContainer from './OrderReviewContainer';

import {setMenuList, setOrder} from '../../actions/restroActions';

class ItemListContainer extends Component {
    constructor(props) {
        super();
        // this.state = {
        //     menuList:[]
        // }
    }
    getRestro(item){
        return this.props.restro[item];
    }
    
    render() {
        return (
            <div className='item-list-container'>
                <div className='row'>
                    <div className='col-md-8'>
                        <ItemList addItem={this.props.addItem} items={this.getRestro('menuList')}
                        increment={ this.props.increment}
                        decrement={ this.props.decrement}/>
                    </div>
                    <div className='col-md-4'>
                        <OrderReviewContainer isSubmitBtn='true' {...this.props}/>
                    </div>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => ({restro: state.restro});
const mapDispatchToProps = (dispatch) => ({
    setMenuList: (data) => {
        dispatch(setMenuList(data))
    },
    setOrder: (data) => {
        dispatch(setOrder(data))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(ItemListContainer);
