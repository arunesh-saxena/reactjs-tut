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
        this.orderList =  this.props.restro.orderList;
    }
    orderList = [];
    onAddItem(item){
        console.log('additem',item);
        if(!this.isItemInOrderList(item)){  
            let orderItem = {
                id: item.id,
                name: item.itemName,
                qnty: 1,
                price: item.price
            }         
            // this.orderList.push(orderItem);
            this.props.setOrder(orderItem);
        }
        console.log('additem',this.orderList);
    }
    isItemInOrderList(item){
        return this.orderList.some((v)=>{
            return v.id === item.id;
        });
    }

    onIncrementClick = (item) => {
        item.qnty++;
        this.setState({orderList: this.orderList});
        console.log(item);
        // return;
        
    }
    onDecrementClick = (item) => {
        item.qnty--;
        if (item.qnty === 0) {
            let orderList = this
                .state
                .orderList
                .filter((v) => {
                    return v.id !== item.id;
                });
        }
        this.setState({orderList: this.orderList});
        // this.props.setOrder(orderItem);
    }

    render = () => {
        return (
            <div>
                <div className="container">
                    <Header title='Select Your Order'/>
                    <div className='body-padding-top'>
                        <ItemListContainer addItem={(item)=>{this.onAddItem(item)}} {...this.props}
                        increment={(item) => this.onIncrementClick(item)}
                        decrement={(item) => this.onDecrementClick(item)}/>
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
