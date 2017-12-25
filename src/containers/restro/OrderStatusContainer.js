import React from 'react';
import './OrderStatusContainer.css';

import {Header} from '../../components/restro/Header';
import OrderReviewContainer from './OrderReviewContainer';

class OrderStatusContainer extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Header title='Your Order Status'/>
                    <div className='body-padding-top'>
                        <div className="row">
                            <div className='col-md-6'>
                                <OrderReviewContainer isReadOnly='true'/>
                            </div>
                            <div className='col-md-6'>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <h4>Order Status</h4>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className="card text-center">
                                            <div className="card-body">
                                                <h4 className="card-title">Token # 43</h4>
                                                <div className='status-outter'>
                                                    <div className="status">
                                                        <span className='text'>Pending
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderStatusContainer;