import React from 'react';
import {connect} from 'react-redux';

import './OrderStatusContainer.css';

import {Header} from '../../components/restro/Header';
import {OrderReviewList} from '../../components/restro/OrderReviewList';
import {setMenuList, setOrder} from '../../actions/restroActions';

import {CONSTANTS} from '../../constants';

class OrderStatusContainer extends React.Component {
    constructor(props) {
        super();
    }
    componentWillMount(){
        this.resetOrder();
    }
    resetOrder(){
        this.props.setOrder({}, 'RESET');
        this.orderId = this.props.match.params.id;
        this.getOrderDetails(this.orderId);
    }
    orderId : '';
    getOrderDetails(orderId){
        // http://localhost:3000/api/order/21
        fetch(`${CONSTANTS.api.restro.getOrder}${orderId}`)
        .then(res=> res.json())
        .then(res=>{
            if(res.success){
                this.setOrderList(res.data.items);
            }
        })
        .catch(error=>{
            console.log(error)
        })

    }

    setOrderList = (list) => {
        let order = {};
        list.map(elm => {
            order  = {
                id: elm.id,
                itemName: elm.itemName,
                qnty: elm.qnty,
                price: elm.price,
                itemCode: elm.itemCode,
                unit: elm.unit
            };
            this.props.setOrder(order);
        });
    }
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