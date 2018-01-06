import React from 'react';

import './OrderReviewList.css';

import {CountBtn} from '../../components/restro/common/countBtn';
import {CurrencyInr} from '../../components/restro/common/utility';

export const OrderReviewList=(props) => {
    
    const onIncrementClick = (item) => {
        props.onIncrement(item);
    }
    const onDecrementClick = (item) => {
        props.onDecrement(item);        
    };
    const onContinue =() =>{
        props.onContinue();
    };

        let subTotal = 0;
        const items = props.orderList
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
                                        isReadOnly={props.isReadOnly}
                                        val={item.qnty}
                                        increment={() => onIncrementClick(item)}
                                        decrement={() => onDecrementClick(item)}/>
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
                {(props.orderList.length)?
                <div className='row'>
                    <div className='col-md-12 cart-list'>
                        <ul className="list-group">
                            {items}
                        </ul>
                    </div>
                </div>:''}
                {(props.orderList.length) ? 
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
                            {(!props.isReadOnly
                                ? <div className="row">
                                        <div className="col-md-12">
                                            <button
                                                type="button"
                                                className="btn btn-success btn-lg btn-block"
                                                onClick={()=>onContinue()}>Continue</button>
                                        </div>
                                    </div>
                                : '')}
                        </div>
                    </div>
                </div>
                :
                <div className='row'>
                    <div className="col-md-12">
                        <div className='alert alert-info'>
                                Add some item to generate your order
                        </div>                      
                    </div>
                </div>
                }
            </div>
        );
}
