import React from 'react';
import "./OrderStatus.css";

import {CONSTANTS} from '../../constants';
export const OrderStatus = (props) => {
    const s=(status)=>{
        props.onOrderStatusChange(status);
    };
    return (
        <div>
            <div className='row'>
                <div className='col-md-12'>
                    <h4>Order Status</h4>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <div className="card text-center">
                        <div className="card-body">
                            <h4 className="card-title">Token # {props.tokenNum}</h4>
                            <div className='status-outter'>
                                <div className="status">
                                    <span className='text'>{props.orderStatusTxt}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {props.isActionBtn
                ? <div className='action-section'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <button type="button" className="btn btn-primary btn-block " onClick={()=>{orderStatusChange(CONSTANTS.restro.orderStatus.ACCEPTED)}}>{CONSTANTS.restro.orderStatus[2]}
                                </button>
                                <button type="button" className="btn btn-primary btn-block btn-info" onClick={()=>{orderStatusChange(CONSTANTS.restro.orderStatus.PROCESSING)}}>{CONSTANTS.restro.orderStatus[3]}
                                </button>
                            </div>
                            <div className='col-md-6'>
                                <button type="button" className="btn btn-primary btn-block btn-warning" onClick={()=>{orderStatusChange(CONSTANTS.restro.orderStatus.COMPLETED)}}>{CONSTANTS.restro.orderStatus[4]}
                                </button>
                                <button type="button" className="btn btn-primary btn-block btn-success" onClick={()=>{orderStatusChange(CONSTANTS.restro.orderStatus.DELIVERED)}}>{CONSTANTS.restro.orderStatus[5]}
                                </button>
                            </div>
                        </div>
                    </div>
                : ''
}
        </div>
    );
};