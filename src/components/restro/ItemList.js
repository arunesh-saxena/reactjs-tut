import React from 'react';
import {connect} from 'react-redux';
import "./itemList.css";
import {MenuItem} from './MenuItem';

// import {setMenuList, setOrder} from '../../actions/restroActions';

 const ItemList = (props) => {
    const isItemInOrderList = (item) => {
        return props.restro.orderList.some((v)=>{
            return v.id === item.id;
        });
    }
    const orderItem = (itemId) => {
        let result = props.restro.orderList.filter((v)=>v.id === itemId);
        return result;
    }
    const items = props
        .items
        .map((item, index) => {
            return <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center">
                <MenuItem orderItem = {orderItem(item.id)} isOrdered={isItemInOrderList(item)} addItem={props.addItem} item={item} 
                increment={props.increment}
                decrement={props.decrement}/>
            </li>
        });
    return (
        <div>
            <ul className="list-group">
                {items}
            </ul>
        </div>
    );
};


const mapStateToProps = (state) => ({restro: state.restro});
const mapDispatchToProps = (dispatch) => ({
    
})
export default connect(mapStateToProps, mapDispatchToProps)(ItemList);