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
        let subTotal = 0;
        const items = this.props.restro.orderList
            .map((item, index) => {
                subTotal += (item.price * item.qnty);
                return <li className="list-group-item" key={index}>
                    <div className='cart-item'>
                        <div className="details clearfix">
                            <div className="name">{item.name}</div>
                        </div>
                        <span>
                            <span className="count">
                                <div className="super_number menu">
                                    <CountBtn
                                        isReadOnly={this.props.isReadOnly}
                                        val={item.qnty}
                                        increment={() => this.onIncrementClick(item)}
                                        decrement={() => this.onDecrementClick(item)}/>
                                </div>
                            </span>
                            <span className="quantity">
                                <span className="x-icon">×</span>
                                <CurrencyInr
                                    item={{
                                    price: item.price
                                }}/>
                            </span>
                            <span className="price item-price">
                                <CurrencyInr
                                    item={{
                                    price: (item.price * item.qnty)
                                }}/></span>
                        </span>
                        <div className="clear"></div>
                    </div>
                </li>
            });

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