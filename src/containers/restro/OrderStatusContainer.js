import React from 'react';
import {connect} from 'react-redux';

import './OrderStatusContainer.css';

import {Header} from '../../components/restro/Header';
import {OrderReviewList} from '../../components/restro/OrderReviewList';
import {setMenuList, setOrder} from '../../actions/restroActions';

class OrderStatusContainer extends React.Component {
    // constructor(props) {
    //     super();
    // }
    render() {
        return (
            <div>
                <div className="container">
                    <Header title='Your Order Status'/>
                    <div className='body-padding-top'>
                        <div className="row">
                            <div className='col-md-6'>
                                <OrderReviewList isReadOnly='true' orderList={this.props.restro.orderList}/>
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



const mapStateToProps = (state) => ({restro: state.restro});
const mapDispatchToProps = (dispatch) => ({
    setMenuList: (data) => {
        dispatch(setMenuList(data))
    },
    setOrder: (data,action) => {
        dispatch(setOrder(data,action));
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(OrderStatusContainer);