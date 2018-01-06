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
        if(!this.isItemInOrderList(item)){  
            let orderItem = {
                id: item.id,
                itemName: item.itemName,
                qnty: 1,
                price: item.price,
                itemCode: item.itemCode,
                unit: item.unit
            }         
            this.props.setOrder(orderItem);
        }
    }
    isItemInOrderList(item){
        return this.props.restro.orderList.some((v)=>{
            return v.id === item.id;
        });
    }

    onIncrementClick = (item) => {
        item.qnty++;
        this.props.setOrder(item,'ADD');
        
    }
    onDecrementClick = (item) => {
        item.qnty--;
        if (item.qnty === 0) {
            this.props.setOrder(item, 'REMOVE');
        }else{
            this.props.setOrder(item,'ADD');
        }
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
    setOrder: (data,action) => {
        dispatch(setOrder(data,action));
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
