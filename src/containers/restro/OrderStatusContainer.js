import React from 'react';
import {connect} from 'react-redux';

import './OrderStatusContainer.css';

import {Header} from '../../components/restro/Header';
import {OrderReviewList} from '../../components/restro/OrderReviewList';
import {OrderStatus} from '../../components/restro/OrderStatus';
import {setMenuList, setOrder, setOrderDetail, updateOrder} from '../../actions/restroActions';

import {CONSTANTS} from '../../constants';

class OrderStatusContainer extends React.Component {
    constructor(props) {
        super();
        this.state = {
            orderDetail: []
        }
    }
    componentWillMount() {
        this.resetOrder();
    }
    resetOrder() {
        this
            .props
            .setOrder({}, 'RESET');
        this.orderId = this.props.match.params.id;
        this.getOrderDetails(this.orderId);
    }
    orderId = null;
    statusChangeAction = true;
    getOrderDetails(orderId) {
        // http://localhost:3000/api/order/21
        fetch(`${CONSTANTS.api.restro.getOrder}${orderId}`)
            .then(res => res.json())
            .then(res => {
                if (res.success) {
                    this.setOrderList(res.data.items);
                    this.setOrderDetail(res.data);
                }
            })
            .catch(error => {
                console.log(error);
            })

    }

    setOrderList = (list) => {
        let order = {};
        list.map(elm => {
            order = {
                id: elm.id,
                itemName: elm.itemName,
                qnty: elm.qnty,
                price: elm.price,
                itemCode: elm.itemCode,
                unit: elm.unit
            };
            this
                .props
                .setOrder(order);
                return true;
        });
    }

    setOrderDetail(data) {
        this
            .props
            .setOrderDetail(data);
        // this.setState({orderDetail: this.props.state.render.orderDetail})
    }

    onOrderStatusClick = (orderStatus) => {
        this
        .props
        .updateOrder({
            orderId: parseInt(this.orderId, Number),
            status: orderStatus
        });
    }
    getOrder(orderId){
        let orderDetail = this.props.restro.orderDetail;
        let ind = orderDetail.findIndex((v) => v.id === parseInt(orderId, Number));
        if(ind > -1){
            return orderDetail[ind]
        }else{
            return null;
        }
    }
    getOrderStatus(orderId) {
        let orderDetail = this.getOrder(orderId);
        if(!!orderDetail){
            return CONSTANTS.restro.orderStatus[orderDetail.status];
        }
        return 0;
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
                                <OrderStatus
                                    tokenNum={this.orderId}
                                    orderStatusTxt={this.getOrderStatus(this.orderId)}
                                    isActionBtn={this.statusChangeAction}
                                    onOrderStatusChange={this.onOrderStatusClick}/>
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
    setOrder: (data, action) => {
        dispatch(setOrder(data, action));
    },
    setOrderDetail: (data) => {
        dispatch(setOrderDetail(data))
    },
    updateOrder: (data) => {
        dispatch(updateOrder(data))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(OrderStatusContainer);