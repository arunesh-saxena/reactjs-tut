import React from 'react';
import "./menuItem.css";

import {CurrencyInr} from './common/utility';
import {CountBtn} from '../../components/restro/common/countBtn';

export const MenuItem = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <img
                        src={props.item.imageURL}
                        alt={props.item.itemName}
                        className="img-thumbnail"></img>
                </div>
                <div className="col-md-9">

                    <div className="card">
                        {/* <h4 className="card-header">{props.item.itemName}</h4> */}
                        <div className="card-body">
                            <div className="row item-heading">
                                <div className="col-md-9">
                                    <div className="card-title">
                                        <h4 className="card-name">{props.item.itemName}</h4>
                                        <div className="priced">
                                            <CurrencyInr item={props.item}/></div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    {!props.isOrdered && <button
                                        type="button"
                                        className="add-cart btn btn-outline-primary btn-sm "
                                        onClick={() => {
                                        props.addItem(props.item)
                                    }}>Add</button>}

                                    {props.isOrdered && <CountBtn
                                        val={props.orderItem[0].qnty}
                                        increment={() => props.increment(props.orderItem[0])}
                                        decrement={()=>{
                                            props.decrement(props.orderItem[0]);
                                        }}
                                        />}
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <p className="card-text">{props.item.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};