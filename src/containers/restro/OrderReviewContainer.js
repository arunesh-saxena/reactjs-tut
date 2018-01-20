import React, {Component} from 'react';
import {connect} from 'react-redux';

import './OrderReviewContainer.css';

import {OrderReviewList} from '../../components/restro/OrderReviewList';
import {setMenuList, setOrder} from '../../actions/restroActions';

import {CONSTANTS} from '../../constants';

class OrderReviewContainer extends Component {
    constructor(props) {
        super();
        this.state = {
            orderList: props.restro.orderList
        }
    }
    componentWillMount(){
        this.resetOrder();
    }
    orderByElm = null;
    tableNum = null;

    resetOrder(){
        this.props.setOrder({}, 'RESET');
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
    onContinueClick () {
        const orderItems = this.props.restro.orderList.slice(0);
        /* let items = [], temp = {};
        orderItems.forEach(item=>{
            temp = Object.assign({}, item);
            delete temp.name;
            items.push(temp);
        }); */
        if(!this.tableNum){
           this.orderByElm.className += ' error';
        } else {
            this.orderByElm.className = this.orderByElm.className.replace('error','');
        }
        let orderData = {
            orderBy: this.tableNum, 
            items: orderItems
        };            

        fetch(CONSTANTS.api.restro.addOrder, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData)
        }).then((res)=>res.json())
		.then((res) => {
            if(res.success){
                this.props.history.push(`/restro/order/status/${res.data.id}`);
            }
            
		}).catch(error => {
            console.error(error);
		});
    }
    onTableChange (tableId) {
        this.tableNum = tableId;
    }
    render() {
        return (
            <div>
                 <OrderReviewList onContinue={()=>{this.onContinueClick()}} orderList={this.props.restro.orderList} onIncrement={this.onIncrementClick} onDecrement={this.onDecrementClick}
                 tableList={CONSTANTS.restro.tableList}
                 orderByRef = {el => this.orderByElm = el}
                 onTableSelect ={(tableId)=>this.onTableChange(tableId)}/>
            </div>
           
        );
    };
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
export default connect(mapStateToProps, mapDispatchToProps)(OrderReviewContainer);