import React, {Component} from 'react';
import {connect} from 'react-redux';

import './OrderReviewContainer.css';

import {CountBtn} from '../../components/restro/common/countBtn';
import {CurrencyInr} from '../../components/restro/common/utility';
import {OrderReviewList} from '../../components/restro/OrderReviewList';
import {setMenuList, setOrder} from '../../actions/restroActions';

class OrderReviewContainer extends Component {
    constructor(props) {
        super();
        this.state = {
            orderList: props.restro.orderList
        }
    }
    // componentWillMount(){
    //     console.log('componentWillUpdate');
    //     console.log(this.props.restro.orderList);
    // }
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
        console.log(this.props,this.context);
        this.props.history.push('/order/status/2');
    }

    render() {
        return (
            <div>
                 <OrderReviewList onContinue={()=>{this.onContinueClick()}} orderList={this.props.restro.orderList} onIncrement={this.onIncrementClick} onDecrement={this.onDecrementClick}/>
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