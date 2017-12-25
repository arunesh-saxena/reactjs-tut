import React, {Component} from 'react';
// import {connect} from 'react-redux';

import './OrderReviewContainer.css';

import {CountBtn} from '../../components/restro/common/countBtn';
import {CurrencyInr} from '../../components/restro/common/utility';

class OrderReviewContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderList: this.orderList
        }
    }
    onIncrementClick = (item) => {
        let list = [];
        item.qnty--;
        if (item.qnty === 0) {
            this.orderList = this.state.orderList.filter((v) => {
                            return v.id !== item.id;
                        });
        }
        this.setState({orderList: this.orderList});
    }
    onDecrementClick = (item) => {
        item.qnty++;
        this.setState({orderList: this.orderList});
    }
    orderList = [
        {
            id: 1,
            name: 'item 1',
            qnty: 2,
            price: 17
        }, {
            id: 2,
            name: 'item 2',
            qnty: 4,
            price: 73
        }, {
            id: 3,
            name: 'item 3',
            qnty: 7,
            price: 21
        }
    ];

    render() {
        let subTotal = 0;
        const items = this
            .state
            .orderList
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

            <div className='fixed-order'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h4>Your Order</h4>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12 cart-list'>
                        <ul className="list-group">

                            {items}

                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="cart-summary-total">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="totals clear">
                                        <span className="name">Subtotal</span>
                                        <span className="price">
                                            <CurrencyInr
                                                item={{
                                                price: subTotal
                                            }}/></span>
                                    </div>
                                </div>
                            </div>
                            {(this.props.isSubmitBtn
                                ? <div className="row">
                                        <div className="col-md-12">
                                            <button type="button" className="btn btn-success btn-lg btn-block">Continue</button>
                                        </div>
                                    </div>
                                : '')}

                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default OrderReviewContainer;